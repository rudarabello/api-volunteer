CREATE TABLE "users" (
	"user_id" serial NOT NULL UNIQUE,
	"type" VARCHAR(255) NOT NULL,
	"name" VARCHAR(255) NOT NULL,
	"e-mail" VARCHAR(255) NOT NULL UNIQUE,
	"phone" integer NOT NULL UNIQUE,
	"password" VARCHAR(255) NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "work_front" (
	"work_front_id" serial NOT NULL,
	"work_front_name" TEXT NOT NULL UNIQUE,
	"manager_id" integer NOT NULL,
	CONSTRAINT "work_front_pk" PRIMARY KEY ("work_front_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "volunterrs" (
	"volunteer_id" serial NOT NULL,
	"user_id" integer NOT NULL,
	"work_front_id" integer NOT NULL,
	CONSTRAINT "volunterrs_pk" PRIMARY KEY ("volunteer_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "schedule" (
	"schedule_id" serial NOT NULL,
	"user_volunteer_id" integer NOT NULL,
	"work_front_id" integer NOT NULL,
	"date_to_work" DATE NOT NULL,
	"time_to_work" TIME NOT NULL,
	"invite_accept" BOOLEAN NOT NULL DEFAULT 'false',
	CONSTRAINT "schedule_pk" PRIMARY KEY ("schedule_id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "work_front" ADD CONSTRAINT "work_front_fk0" FOREIGN KEY ("manager_id") REFERENCES "users"("user_id");

ALTER TABLE "volunterrs" ADD CONSTRAINT "volunterrs_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");
ALTER TABLE "volunterrs" ADD CONSTRAINT "volunterrs_fk1" FOREIGN KEY ("work_front_id") REFERENCES "work_front"("work_front_id");

ALTER TABLE "schedule" ADD CONSTRAINT "schedule_fk0" FOREIGN KEY ("user_volunteer_id") REFERENCES "users"("user_id");
ALTER TABLE "schedule" ADD CONSTRAINT "schedule_fk1" FOREIGN KEY ("work_front_id") REFERENCES "work_front"("work_front_id");





