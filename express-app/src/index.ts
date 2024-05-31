
import express from "express";
import { z } from "zod";

export const app = express();
app.use(express.json());

// const sumInput = z.object({
//     a: z.number(),
//     b: z.number()
// })

app.post("/sum", (req, res) => {
    // const parsedResponse = sumInput.safeParse(req.body)
    
    // if (!parsedResponse.success) {
    //     return res.status(411).json({
    //         message: "Incorrect inputs"
    //     })
    // }

    const answer = req.body.a + req.body.b;

    res.status(200).json({
        answer
    })
});