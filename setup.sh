#!/bin/bash
echo "🔧 Setting up HUE_18..."

# Copy config template
cp config/odoo.conf.template config/odoo.conf

# Replace paths with current directory
sed -i "s|/path/to/hue_18|$(pwd)|g" config/odoo.conf

# Enable Git hooks
git config core.hooksPath .githooks

echo "✅ Setup complete!"
echo "📝 Edit config/odoo.conf for your database password"
