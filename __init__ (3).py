"""
Ujjal Manna — Portfolio Backend
FastAPI + MongoDB + NewsAPI/GNews + Email notifications

Run locally:
    pip install -r requirements.txt
    uvicorn app.main:app --reload
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

from app.config import settings
from app.database import connect_to_mongo, close_mongo_connection
from app.routes import queries, news, gate


@asynccontextmanager
async def lifespan(app: FastAPI):
    await connect_to_mongo()
    yield
    await close_mongo_connection()


app = FastAPI(
    title="Ujjal Manna Portfolio API",
    description="Backend powering the portfolio, tech news feed, GATE guidance hub, and contact form.",
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(queries.router)
app.include_router(news.router)
app.include_router(gate.router)


@app.get("/")
async def root():
    return {
        "status": "online",
        "message": "Ujjal Manna Portfolio API is running.",
        "docs": "/docs",
    }


@app.get("/api/health")
async def health_check():
    return {"status": "healthy"}
