FROM node:18-alpine

RUN echo "Dockerfile"
WORKDIR /app
RUN npm install -g pnpm

COPY . /app
RUN cd /app && pnpm install && pnpm build
EXPOSE 4400

CMD ["pnpm","start"]


