const express = require("express");
const router = express.Router();
const client = require("../db");
const jwt = require("jsonwebtoken");
const secretKey = "test";

const testData = [
    {
        "name":"Backlog",
        "items": [
            {
                "id":1,
                "priority": 0,
                "title": "Company website redesign.",
                "chat": 1,
                "attachment": 2,
                "assignees": [
                    {
                        "avt": "https://randomuser.me/api/portraits/men/75.jpg"
                    }
                ]
            },
            {
                "id":2,
                "priority": 2,
                "title": "Mobile app login process prototype.",
                "chat": 10,
                "attachment": 4,
                "assignees": [
                    {
                        "avt": "https://randomuser.me/api/portraits/men/67.jpg"
                    }
                ]
            }
        ]
    },
    {
        "name":"In Progress",
        "items": [
            {
                "id":3,
                "priority": 1,
                "title": "Research and strategy for upcoming project.",
                "chat": 0,
                "attachment": 3,
                "assignees": [
                    {
                        "avt": "https://randomuser.me/api/portraits/men/79.jpg"
                    }
                ]
            }
        ]
    },
    {
        "name":"In Review",
        "items": [
            {
                "id":4,
                "priority": 2,
                "title": "Dashboard layout redesign.",
                "chat": 13,
                "attachment": 2,
                "assignees": [
                    {
                        "avt": "https://randomuser.me/api/portraits/men/75.jpg"
                    }
                ]
            },
            {
                "id":5,
                "priority": 0,
                "title": "Social media posts",
                "chat": 0,
                "attachment": 0,
                "assignees": [
                    {
                        "avt": "https://randomuser.me/api/portraits/men/68.jpg"
                    }
                ]
            }
        ]
    },
    {
        "name":"Completed",
        "items": [
            {
                "id":6,
                "priority": 0,
                "title": "Review client spec document and give feedback.",
                "chat": 13,
                "attachment": 2,
                "assignees": [
                    {
                        "avt": "https://randomuser.me/api/portraits/men/75.jpg"
                    }
                ]
            },
            {
                "id":7,
                "priority": 1,
                "title": "Navigation designs",
                "chat": 0,
                "attachment": 0,
                "assignees": [
                    {
                        "avt": "https://randomuser.me/api/portraits/men/68.jpg"
                    }
                ]
            },
            {
                "id":8,
                "priority": 2,
                "title": "Create style guide based on previous feedback",
                "chat": 5,
                "attachment": 2,
                "assignees": [
                    {
                        "avt": "https://randomuser.me/api/portraits/men/64.jpg"
                    }
                ]
            }
        ]
    }
]


// Define the POST route for /login
router.post("/", async (req, res) => {
  // Your POST route logic for /login
  const { email, trelloData } = req.body;
  try {
    const email = 't4zeng@uwaterloo.ca';
    const trelloData = [{ time: '4' }];

    const query = {
      text: 'UPDATE accounts SET "trelloData" = $1 WHERE email = $2',
      values: [trelloData, email],
    };

    const result = await client.query(query);
    return res.json({ message: 'Update successful' });
  } catch (error) {
    console.error('Error updating data:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;