# Deploying Travel Planning AI to Render

This guide provides step-by-step instructions for deploying the Travel Planning AI application to Render.

## Prerequisites

1. A [Render](https://render.com/) account
2. Your Google Gemini API key
3. Your SERP API key

## Deployment Steps

### 1. Push Your Code to GitHub

Make sure your code is pushed to a GitHub repository. Render can deploy directly from GitHub.

### 2. Create a New Web Service on Render

1. Log in to your Render account
2. Click on the "New +" button and select "Web Service"
3. Connect your GitHub repository
4. Select the repository with your Travel Planning AI code

### 3. Configure the Web Service

Use the following settings:

- **Name**: `travel-planning-ai` (or your preferred name)
- **Environment**: `Python 3`
- **Region**: Choose the region closest to your target users
- **Branch**: `main` (or your default branch)
- **Build Command**: `pip install -r requirements-render.txt`
- **Start Command**: `uvicorn app:app --host 0.0.0.0 --port $PORT`
- **Plan**: Free (or select a paid plan for better performance)

### 4. Add Environment Variables

Add the following environment variables:

- `GEMINI_API_KEY`: Your Google Gemini API key
- `SERP_API_KEY`: Your SERP API key
- `PYTHON_VERSION`: `3.9.18`

### 5. Deploy the Service

Click "Create Web Service" to start the deployment process. Render will automatically build and deploy your application.

### 6. Monitor the Deployment

You can monitor the deployment process in the Render dashboard. Check the logs for any errors.

## Troubleshooting

### Issue: Rust Compilation Errors

If you encounter errors related to Rust compilation (especially with pydantic-core), use the provided `requirements-render.txt` file which contains compatible versions of all dependencies.

The `requirements-render.txt` file is specifically configured for Render deployment and avoids packages that require Rust compilation.

### Issue: Static Files Not Found

If your static files are not being served correctly, check:

1. The directory structure in your repository
2. The `app.mount` line in your `app.py` file

### Issue: Environment Variables

If your application can't access environment variables, make sure:

1. They are correctly set in the Render dashboard
2. Your application is loading them correctly with `load_dotenv()`

## Updating Your Deployment

To update your deployment:

1. Push changes to your GitHub repository
2. Render will automatically detect the changes and redeploy your application

## Monitoring and Scaling

- Monitor your application's performance in the Render dashboard
- Upgrade to a paid plan if you need more resources
- Set up custom domains and SSL certificates in the Render dashboard

## Support

If you encounter any issues, check the [Render documentation](https://render.com/docs) or contact Render support.