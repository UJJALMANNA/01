services:
  - type: web
    name: ujjal-portfolio-backend
    runtime: python
    plan: free
    buildCommand: "pip install -r requirements.txt"
    startCommand: "uvicorn app.main:app --host 0.0.0.0 --port $PORT"
    envVars:
      - key: MONGO_URI
        sync: false
      - key: MONGO_DB_NAME
        value: ujjal_portfolio
      - key: ALLOWED_ORIGINS
        sync: false
      - key: NEWS_API_KEY
        sync: false
      - key: GNEWS_API_KEY
        sync: false
      - key: MAIL_USERNAME
        sync: false
      - key: MAIL_PASSWORD
        sync: false
      - key: MAIL_FROM
        sync: false
      - key: MAIL_TO
        sync: false
