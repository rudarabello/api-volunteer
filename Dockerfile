FROM node:18

# diretório criado no container
WORKDIR /usr/src/

# copia todos os arquivos para o container
COPY . . 

RUN npm i
RUN npm run build
RUN npx prisma generate

EXPOSE 5000

#só executa quando rodarmos a imagem
CMD ["npm", "start"] 