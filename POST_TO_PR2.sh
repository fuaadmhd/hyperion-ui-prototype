#!/bin/bash
#
# Script to post the comprehensive specification comment to PR #2
# This script should be run with proper GitHub authentication
#
# Usage: GH_TOKEN=<your_token> ./POST_TO_PR2.sh
#

REPO_OWNER="fuaadmhd"
REPO_NAME="hyperion-ui-prototype"
PR_NUMBER=2
COMMENT_FILE="PR2_COMMENT.md"

if [ -z "$GH_TOKEN" ]; then
    echo "Error: GH_TOKEN environment variable not set"
    echo "Usage: GH_TOKEN=<your_token> ./POST_TO_PR2.sh"
    exit 1
fi

if [ ! -f "$COMMENT_FILE" ]; then
    echo "Error: Comment file $COMMENT_FILE not found"
    exit 1
fi

echo "Posting comment to PR #$PR_NUMBER..."

# Use GitHub CLI to post the comment
gh pr comment $PR_NUMBER --body-file "$COMMENT_FILE" --repo "$REPO_OWNER/$REPO_NAME"

if [ $? -eq 0 ]; then
    echo "✅ Comment posted successfully to PR #$PR_NUMBER"
else
    echo "❌ Failed to post comment"
    exit 1
fi
