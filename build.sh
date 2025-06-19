#!/bin/bash
# Install Python dependencies
pip install -r requirements.txt

# Create necessary directories if they don't exist
mkdir -p static

# Print completion message
echo "Build completed successfully!"