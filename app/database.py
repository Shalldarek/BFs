import os
from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv

load_dotenv()

MONGO_URI: str = os.environ["MONGO_URI"]
DATABASE_NAME: str = os.environ["DATABASE_NAME"]

client: AsyncIOMotorClient | None = None


async def connect_to_mongo() -> None:
    global client
    client = AsyncIOMotorClient(MONGO_URI)

    await client.admin.command("ping")
    print(f"Connected to MongoDB (database: {DATABASE_NAME})")


async def close_mongo_connection() -> None:
    global client
    if client is not None:
        client.close()
    print("Disconnected from MongoDB")


def get_database():
    if client is None:
        raise RuntimeError(
            "MongoDB client is not initialized. "
            "Ensure connect_to_mongo() succeeded before calling get_database()."
        )
    return client[DATABASE_NAME]
