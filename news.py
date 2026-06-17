"""
Application configuration, loaded from environment variables (.env).
Uses pydantic-settings so values are validated and typed.
"""
from pydantic_settings import BaseSettings
from typing import List


class Settings(BaseSettings):
    # MongoDB
    MONGO_URI: str = "mongodb://localhost:27017"
    MONGO_DB_NAME: str = "ujjal_portfolio"

    # CORS
    ALLOWED_ORIGINS: str = "http://localhost:5173"

    # News APIs
    NEWS_API_KEY: str = ""
    NEWS_API_URL: str = "https://newsapi.org/v2/everything"
    GNEWS_API_KEY: str = ""

    # Email
    MAIL_USERNAME: str = ""
    MAIL_PASSWORD: str = ""
    MAIL_FROM: str = ""
    MAIL_PORT: int = 587
    MAIL_SERVER: str = "smtp.gmail.com"
    MAIL_TO: str = ""

    ENVIRONMENT: str = "development"

    @property
    def origins_list(self) -> List[str]:
        return [origin.strip() for origin in self.ALLOWED_ORIGINS.split(",") if origin.strip()]

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        extra = "ignore"


settings = Settings()
