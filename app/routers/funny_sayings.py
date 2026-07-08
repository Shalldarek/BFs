from fastapi import APIRouter
from app.database import get_database

router = APIRouter()

@router.get("/funny-sayings")
async def get_funny_sayings():
    db = get_database()
    hlasky_cursor = db.hlasky.find()
    hlasky = await hlasky_cursor.to_list(length=100)

    for h in hlasky:
        h["_id"] = str(h["_id"])
    
    return hlasky
    