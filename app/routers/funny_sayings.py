from fastapi import APIRouter
from bson import ObjectId
from app.database import get_database

router = APIRouter()
COLLECTION_NAME = "hlasky"

@router.get("/funny-sayings")
async def get_funny_sayings():
    db = get_database()
    sayings_cursor = db[COLLECTION_NAME].find()
    sayings = await sayings_cursor.to_list(length=100)

    for h in sayings:
        h["_id"] = str(h["_id"])
    
    return sayings

@router.get("/funny-sayings/{saying_id}")
async def get_funny_saying(saying_id: str):
    db = get_database()
    try:
        object_id = ObjectId(saying_id)
    except Exception:
        return {"error": "Invalid saying id"}

    saying = await db[COLLECTION_NAME].find_one({"_id": object_id})

    if saying:
        saying["_id"] = str(saying["_id"])
        return saying
    else:
        return {"error": "Saying not found"}
    