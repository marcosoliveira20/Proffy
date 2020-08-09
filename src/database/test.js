const Database = require('./db');
const createProffy = require('./createProffy')

Database.then(async (db) => {
  proffyValue = {
    name: "Marcos Santos",
    avatar: "https://avatars0.githubusercontent.com/u/61641070?s=460&u=46bd66b29d51e679d7c4eba3c72b54b7e945c548&v=4", 
    whatsapp: "51900000000", 
    bio: "Venha aprender, e conhecer novas tecnologias que foram descobertas."
  }

  classValue = {
    subject: 1, 
    cost: "20", 

  }

  classScheduleValues = [
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }
  ]

  // await createProffy(db, { proffyValue, classValue, classScheduleValues})

  const selectedProffys = await db.all("SELECT * FROM proffys")
  // console.log(selectedProffys)

  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id = 1
  `)
  // console.log(selectClassesAndProffys)

  const selectClassesSchedules = await db.all(`
    SELECT class_schedule.*
    FROM class_schedule
    WHERE class_schedule.class_id = "1"
    AND class_schedule.weekday = "0"
    AND class_schedule.time_from <= "520"
    AND class_schedule.time_to > "520"
  `) 

  // console.log(selectClassesSchedules)
})