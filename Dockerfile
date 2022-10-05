FROM node:18

# diretório criado no container
WORKDIR /usr/src/

# copia todos os arquivos para o container
COPY . . 

EXPOSE 5000

RUN npm i && npm run build && npx prisma generate
#só executa quando rodarmos a imagem
CMD ["npm", "start"] 