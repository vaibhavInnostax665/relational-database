import { PrismaClient } from "@prisma/client";
import amqp from "amqplib";

const prisma = new PrismaClient();

let connection, order, channel;

async function connectToRabbitMQ() {
  const amqpServer = "amqp://guest:guest@localhost:5672";
  connection = await amqp.connect(amqpServer);
  channel = await connection.createChannel();
  await channel.assertQueue("product-service-queue");
}
connectToRabbitMQ();

const buy = async (details) => {
  const { id } = details;
  const product = await prisma.product.findUnique({
    where: {
      id: id,
    },
  });

  channel.sendToQueue(
    "order-service-queue",
    Buffer.from(
      JSON.stringify({
        product,
      })
    )
  );

  channel.consume("product-service-queue", (data) => {
    console.log("Consumed from product-service-queue");
    order = JSON.parse(data.content);
    channel.ack(data);
  });

  return { status: 201, message: "Order placed successfully", data: order };
};

export default buy;
