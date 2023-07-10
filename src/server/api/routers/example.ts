import { Configuration, OpenAIApi } from "openai";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

interface IOpenAIRequest {
  prompt: string;
  n?: number;
  size?: string;
  response_format?: string;
  user?: string;
}

// Define the input schema using zod
const OpenAIRequestSchema = z.object({
  prompt: z.string(),
  n: z.number().optional(),
  size: z.enum(["1024x1024", "512x512"]).optional(),
  response_format: z.string().optional(),
  user: z.string().optional(),
});

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  dalle: publicProcedure
  .input(OpenAIRequestSchema)
  .mutation(async ({input}) => {
    const configuration = new Configuration({
      apiKey: process.env.API_KEY,
    });
      
    const openai = new OpenAIApi(configuration);
      
    try {
      const response = await openai.createImage({
        prompt: input.prompt,
        n: 2,
        size: "1024x1024",
      });
      console.log(response.data);
      return response.data
    } catch (error) {
      console.error(error);
    }
  })
});
