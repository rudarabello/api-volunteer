-- CreateTable
CREATE TABLE "schedule" (
    "schedule_id" SERIAL NOT NULL,
    "user_volunteer_id" INTEGER NOT NULL,
    "work_front_id" INTEGER NOT NULL,
    "date_to_work" DATE NOT NULL,
    "time_to_work" TIME(6) NOT NULL,
    "invite_accept" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "schedule_pk" PRIMARY KEY ("schedule_id")
);

-- CreateTable
CREATE TABLE "users" (
    "user_id" SERIAL NOT NULL,
    "type" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "e-mail" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pk" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "volunterrs" (
    "volunteer_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "work_front_id" INTEGER NOT NULL,

    CONSTRAINT "volunterrs_pk" PRIMARY KEY ("volunteer_id")
);

-- CreateTable
CREATE TABLE "work_front" (
    "work_front_id" SERIAL NOT NULL,
    "work_front_name" TEXT NOT NULL,
    "manager_id" INTEGER NOT NULL,

    CONSTRAINT "work_front_pk" PRIMARY KEY ("work_front_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_e-mail_key" ON "users"("e-mail");

-- CreateIndex
CREATE UNIQUE INDEX "users_phone_key" ON "users"("phone");

-- CreateIndex
CREATE UNIQUE INDEX "work_front_work_front_name_key" ON "work_front"("work_front_name");

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_fk0" FOREIGN KEY ("user_volunteer_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_fk1" FOREIGN KEY ("work_front_id") REFERENCES "work_front"("work_front_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "volunterrs" ADD CONSTRAINT "volunterrs_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "volunterrs" ADD CONSTRAINT "volunterrs_fk1" FOREIGN KEY ("work_front_id") REFERENCES "work_front"("work_front_id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "work_front" ADD CONSTRAINT "work_front_fk0" FOREIGN KEY ("manager_id") REFERENCES "users"("user_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
