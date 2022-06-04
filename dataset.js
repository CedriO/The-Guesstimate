const fermiEstimations = [
    {
        "question": "If all but 1 million people on Earth died, how far (on average) would you have to walk to meet someone?",
        "program": "PROGRAM:=Q1: What is the land cover on earth?=Q2: What is the population alive after all of them have died?=Q3: What is the population density?=Q4: What is the relation between population density and distance between two people on Earth=A1: 501e+6 km**2=A2: 1e+6=A3: 1/2=Q2 -> A2 | F5=Q1 -> A1 | F2=Q3 -> Div (Q1, Q2)=Q4 -> A3 | F9=P: Pow(Q3, Q4)",
        "answer": "22.3 km",
        "context": "CONTEXT:=F1: The average life expectancy is 72 years.=F2: The total land area on Earth is 501e+6 km square=F3: The volume of a golf ball is 4e-5 km**3=F4: It takes around 1 second to count a number=F5: The population given is 1e+6=F6: On an average, we meet 140 new people every year.=F7: Around 360 sq. yards is required to build a house with a yard.=F8: The limit of a planet size is 10x that of jupiter.=F9: Considering people to be in the midpoint of their areas (assuming to be squares), so they have to travel the length of their square to reach another person.=F10: There are 24 hours in a day.=F11: The time interval between two full moons is 30 days=F12: There are 60 minutes in an hour.=F13: There are 60 seconds in a minute.=F14: The number of calories burnt while climbing a step is 0.17 calories=F15: The height is 1.73 m=F16: The average thickness of a sheet of paper is 0.00008 m=F17: The volume of the oceans is 1.3e+9 km**3=F18: The amount of calories present in a chips bag is 1242.=F19: The size of Jupiter is 1.4e+15 km cube.=F20: There are 1000000 numbers in a million",
        "fact_transform": {
            "1": 0,
            "4": 1,
            "8": 2
        }
    },
    {
        "question": "How much water would need to be evaporated to turn Arizona tropical?",
        "program": "PROGRAM:=Q1: How much water evaporates, causing a change in one degree temperature?=Q2: What is the temperature to be lowered?=Q3: What is the average temperature of Arizona?=Q4: What is the temperature of a tropical area?=A1: 1e-3 L=A2: 35=A3: 26=Q4 -> A3 | F16=Q3 -> A2 | F4=Q2 -> Sub (Q3, Q4)=Q1 -> A1 | F1=P: Mul (Q1, Q2)",
        "answer": "9e-3 L",
        "context": "CONTEXT:=F1: 1 mL heated with 4.1 J can change the temperature by 1 degree celsius.=F2: The time interval between two full moons is 30 days=F3: The surface area of the pipe is 0.75 times the diameter square.=F4: An average temperature of Arizona is 35 degree celsius=F5: The height is 1.73 m=F6: The volume of the oceans is 1.3e+9 km**3=F7: The force exerted by the car on the road by the virtue of gravity is 15000 N=F8: An average person's annual consumption of food is 1996 pounds=F9: The rate at which waters flows in a typical sea is 6.4 kmph=F10: The total volume of Mediterranean Sea is 439000 km cube=F11: An average farm produces around 52000 pounds of food each year.=F12: The force exerted by the wind travelling by metre per hour is 4.6e-4 N-hour/metre=F13: The average thickness of a sheet of paper is 0.00008 m=F14: There are 24 hours in a day.=F15: The size of Jupiter is 1.4e+15 km cube.=F16: The average temperature of a tropical area is 26 degree celsius.=F17: The diameter of the pipe is 0.001 miles=F18: The total volume of water in the oceans is 321000000 cubic miles=F19: The limit of a planet size is 10x that of jupiter.=F20: The volume of a golf ball is 4e-5 km**3",
        "fact_transform": {
            "0": 0,
            "3": 1,
            "15": 2
        }
    },
    {
        "question": "If a gallon of paint is used to coat 400 ft2 of walls, how thick, cm, is the paint film?",
        "program": "PROGRAM:=Q1: What is the total volume of paint available to be painted on the wall?=Q2: What is the surface area of the wall?=Q3: How many cm is 1 feet?=Q4: What is the thickness of paint in feet?=A1: 0.13 ft**3=A2: 400 ft**2=A3: 30 cm*ft**-1=Q2 -> A2 | F9=Q1 -> A1 | F16=Q4 -> Div (Q1, Q2)=Q3 -> A3 | F17=P: Mul(Q3, Q4)",
        "answer": "0.01 cm",
        "context": "CONTEXT:=F1: The mass of Donald Trump is 111 kg=F2: The average force exerted by releasing a rubber band is 10 N=F3: The average force exerted while crushing a human skull is 2300 N=F4: The surface area of a lake is 708000 metre square=F5: The average mass of a mouse is 0.02 kg=F6: The average temperature of a tropical area is 26 degree celsius.=F7: The volume of a horse is 500000 cc=F8: The surface area of the pipe is 0.75 times the diameter square.=F9: The total surface area of the wall is 400 sq. ft=F10: The total volume of water in the oceans is 321000000 cubic miles=F11: The thickness of the thin film is 0.005 metres=F12: The length of a human and it's mass and linearly directly proportional to each other and the length of Donald Trump is 190 cm=F13: An average temperature of Arizona is 35 degree celsius=F14: 1 mL heated with 4.1 J can change the temperature by 1 degree celsius.=F15: The diameter of the pipe is 0.001 miles=F16: The total volume of paint available to be painted on the wall is 0.13 cubic feet=F17: One foot is equal to 30 cm=F18: The mass of a maus tank is 170551 kg=F19: The volume of glue stick is 100 cc=F20: The mass of an average Clydesdale horse is 850 kg",
        "fact_transform": {
            "15": 0,
            "8": 1,
            "16": 2
        }
    },
    {
        "question": "How much space would be required to fit 1 individual of each species of plants and animals?",
        "program": "PROGRAM:=Q1: What is the volume occupied by a single species of all the animals in the world?=Q2: What is the volume occupied by single species of all the plants in the world?=Q3: What is the volume of an average animal?=Q4: How many different species of animals present?=Q5: What is the volume of a single plant?=Q6: How many different species of plant present?=A1: 7200 cm**3=A2: 7.7e+6=A3: 1570 cm**3=A4: 391000=Q6 -> A4 | F16=Q5 -> A3 | F15=Q4 -> A2 | F19=Q3 -> A1 | F11=Q2 -> Mul ( Q5, Q6)=Q1 -> Mul (Q3, Q4)=P: Add (Q1, Q2)",
        "answer": "56053870000 cm**3",
        "context": "CONTEXT:=F1: An average person's annual consumption of food is 1996 pounds=F2: The height is 1.73 m=F3: It takes around 1 second to count a number=F4: The circumference of the Earth is 1577756575 inches=F5: The length of a nerd rope is 12 inches=F6: The limit of a planet size is 10x that of jupiter.=F7: There are 60 minutes in an hour.=F8: The size of Jupiter is 1.4e+15 km cube.=F9: There are 60 seconds in a minute.=F10: There are 24 hours in a day.=F11: Assuming the average volume of a single animal to be 7200 cc (90x40x2)=F12: An average farm produces around 52000 pounds of food each year.=F13: Around 360 sq. yards is required to build a house with a yard.=F14: The average thickness of a sheet of paper is 0.00008 m=F15: The average volume of a plant is 1570 cc (20cm height and 5cm radius)=F16: The number of plant species in the world are 391000=F17: There are 1000000 numbers in a million=F18: The total human population is 7.2e+9=F19: The number of animal species in the world are 7.7e+6=F20: the average family size is 4",
        "fact_transform": {
            "10": 0,
            "18": 1,
            "14": 2,
            "15": 3
        }
    },
    {
        "question": "How many canaries in the world are currently flying?",
        "program": "PROGRAM:=Q1: What is the total canary population?=Q2: Approximately, what percent of canaries are awake at the moment and are also flying (awake-flying, awake-not flying, not awake-not flying)=A1: 100000=A2: 0.33=Q2 -> A2 | F16=Q1 -> A1 | F11=P: Mul (Q1, Q2)",
        "answer": "33000",
        "context": "CONTEXT:=F1: The volume of the oceans is 1.3e+9 km**3=F2: The circumference of the Earth is 1577756575 inches=F3: The bee flies for a total of around 4 hours each day.=F4: The average speed at which a bee flies is 15 miles per hour=F5: The volume of a single post-it sheet is 0.007 cubic metre=F6: The length of a nerd rope is 12 inches=F7: The weight of the person is 140 lb=F8: The volume of a golf ball is 4e-5 km**3=F9: The average volume of a single gold ball is 40.672693 cubic cm=F10: The average body height of a person is 170 cm.=F11: The total canary population in the world is 100000=F12: It costs about 100 USD to fly the drone for a sq.km.=F13: An average model rocket (drone), can carry 40 lbs.=F14: The volume of a single Cessna 172 is 248 cubic metre=F15: The average thickness of a sheet of paper is 0.00008 m=F16: Around 33 percent of canaries are flying right now.=F17: The height is 1.73 m=F18: The average volume of a suitcase is 75000 cubic cm=F19: The total habitable land in the world is 6070285 km=F20: Ideal wingpsan length is 83% of the length of the flying body.",
        "fact_transform": {
            "10": 0,
            "15": 1
        }
    },
    {
        "question": "How old are you if you are a million hours old?",
        "program": "PROGRAM:=Q1: How many days does a million hours equal to?=Q2: How many days are there in a year?=Q3: How many hours does a million hours equal to?=Q4: How many hours are there in a day?=A1: 365 days/year=A2: 24 hours/day=A3: 1000000 hours=Q3 -> A3 | F2=Q4 -> A2 | F11=Q1 -> Div(Q3, Q4)=Q2 -> A1 | F17=P: Div(Q1, Q2)",
        "answer": "114 years",
        "context": "CONTEXT:=F1: The time interval between two full moons is 30 days=F2: There are a 1000000 hours in a million hours.=F3: There are 1000000 numbers in a million=F4: An average intake of freshman at a university is 550=F5: There are 60 minutes in an hour.=F6: The average sleep quantity of a person is 8 hours=F7: The speed at which Earth moves is 1656 kmph=F8: The duration of my favorite song is 3 minutes.=F9: There are 60 seconds in a minute=F10: There are 60 seconds in a minute.=F11: There are 24 hours in a day.=F12: There are 1440 minutes in a day.=F13: It takes around 1 second to count a number=F14: The limit of a planet size is 10x that of jupiter.=F15: The size of Jupiter is 1.4e+15 km cube.=F16: The speed of light in kmph is 1.079e+9 kmph=F17: There are 365 days in a year.=F18: There are 24 hours in a single day.=F19: There are 1000000 seconds in a million seconds=F20: The average life expectancy is 72 years",
        "fact_transform": {
            "16": 0,
            "10": 1,
            "1": 2
        }
    },
    {
        "question": "How many mice could pull the Maus tank?",
        "program": "PROGRAM:=Q1: What is the total mass of the Maus tank?=Q2: What is the average mass of a mouse?=A1: 170551 kg=A2: 0.02 kg=Q2 -> A2| F3=Q1 -> A1 | F17=P: Div (Q1, Q2)",
        "answer": "8527550",
        "context": "CONTEXT:=F1: The surface area of the pipe is 0.75 times the diameter square.=F2: The number of calories burnt while climbing a step is 0.17 calories=F3: The average mass of a mouse is 0.02 kg=F4: An average model rocket (drone), can carry 40 lbs.=F5: The circumference of the Earth is 1577756575 inches=F6: The size of Jupiter is 1.4e+15 km cube.=F7: The surface area of The Shard is 398490 sq. metre=F8: The volume of an ant is 1e-8 metre cube=F9: The limit of a planet size is 10x that of jupiter.=F10: The thickness of an average atom is 0.3e-9 m=F11: The volume of a golf ball is 4e-5 km**3=F12: The amount of calories present in a chips bag is 1242.=F13: The diameter of the pipe is 0.001 miles=F14: The thickness of the connecting parts in a microchip is 0.9e-9 m=F15: The length of a nerd rope is 12 inches=F16: The volume of the oceans is 1.3e+9 km**3=F17: The mass of a maus tank is 170551 kg=F18: The total volume of water in the oceans is 321000000 cubic miles=F19: The weight of the person is 140 lb=F20: The height of a Shard is 244 metres",
        "fact_transform": {
            "16": 0,
            "2": 1
        }
    },
    {
        "question": "How many times does your heart beat per week?",
        "program": "PROGRAM:=Q3: How many times does our heart beat in a day?=Q4: How many hours are there in a day?=Q5: How many times does our heart beat in an hour?=Q6: How many minutes are there in an hour?=Q7: How many times does our heart beat in a minute?=Q8: How many days are there in a week?=A2: 7=A3: 24=A4: 60=A5: 80=Q7 -> A5 | F5=Q6 -> A4 | F20=Q5 -> Mul (Q6, Q7)=Q4 -> A3 | F16=Q3 -> Mul (Q4, Q5)=Q8 -> A2 | F9=P: Mul (Q8, Q3)",
        "answer": "806400",
        "context": "CONTEXT:=F1: There are 179476 words in english language.=F2: There are 365 days in a year.=F3: The writer wrote about 15 words an hour.=F4: The average life expectancy is 72 years=F5: The numerical coefficient for converting the factor to percent is 100=F6: The writer wrote for 4 years.=F7: There are 1440 minutes in a day.=F8: There are 52 weeks in a year.=F9: There are 24 hours in a day.=F10: The writer wrote for 40 hours a week.=F11: There are 7 days in a week.=F12: The average sleep quantity of a person is 8 hours=F13: The time interval between two full moons is 30 days=F14: An average student uses 40 pages per day=F15: The speed at which Earth moves is 1656 kmph=F16: There are 60 minutes in an hour.=F17: There are 516 students in a school.=F18: There are 24 hours in a single day.=F19: The duration of my favorite song is 3 minutes.=F20: A normal heart beats 80 times a minute.",
        "fact_transform": {
            "10": 0,
            "8": 1,
            "15": 2,
            "19": 3
        }
    },
    {
        "question": "What do you estimate the total weight of all the Covid-19 viruses in the world?",
        "program": "PROGRAM:=Q1: What is the mass of the corona virus in a patient's body?=Q2: How many people in total are down with Coronavirus right now?=A1: 50e-6 g=A2: 1.58e+6=Q2 -> A2 | F5=Q1 -> A1 | F11=P: Mul (Q1, Q2)",
        "answer": "79 g",
        "context": "CONTEXT:=F1: The total human population currently is 7.2e+9=F2: The weight of the person is 140 lb=F3: The average volume of a single cherry is 4.1 cc.=F4: The average force exerted by releasing a rubber band is 10 N=F5: The total number of people associated with CoronaVirus right now are 1.58e+6=F6: The population of mankind in 1918 is 1.8e+9=F7: The size of Jupiter is 1.4e+15 km cube.=F8: The volume occupied by a single molecule is 3e-23 metre cube=F9: The limit of a planet size is 10x that of jupiter.=F10: The average force exerted while crushing a human skull is 2300 N=F11: The mass of the corona virus in a patient's body is 50e-6 grams=F12: The volume occupied by a single TiO2 pigment is 0.000001 metre cube=F13: The height is 1.73 m=F14: The total deaths caused due to covid till now are 3.3e+6=F15: The circumference of the Earth is 1577756575 inches=F16: 417234 cherries are going to be loosely stacked.=F17: The thickness of an average atom is 0.3e-9 m=F18: An average model rocket (drone), can carry 40 lbs.=F19: The length of a nerd rope is 12 inches=F20: The thickness of the connecting parts in a microchip is 0.9e-9 m",
        "fact_transform": {
            "10": 0,
            "4": 1
        }
    },
    {
        "question": "How many people are airborne over Europe at any one moment?",
        "program": "PROGRAM:=Q1: How many people are arborne at any given time?=Q2: What fraction of Earth, does Europe constitute?=A1: 1270000=A2: 0.067=Q2 -> A2 | F12=Q1 -> A1 | F16=P: Mul (Q1, Q2)",
        "answer": "85090",
        "context": "CONTEXT:=F1: The total canary population in the world is 100000=F2: There are 24 hours in a day.=F3: The volume of a typical room is 60 metre cube=F4: 60 minutes make up an hour.=F5: The length of a nerd rope is 12 inches=F6: Around 33 percent of canaries are flying right now.=F7: The force exerted by the wind travelling by metre per hour is 4.6e-4 N-hour/metre=F8: The average body height of a person is 170 cm.=F9: The minimum size visible to a human is 1e-4 m=F10: The average air present inside these balls is 0.8 atmospheres of air.=F11: An average human inhales 6 liters of air every minute=F12: The fraction of Earth as Europe is 6.7 %=F13: The circumference of the Earth is 1577756575 inches=F14: The average speed at which a bee flies is 15 miles per hour=F15: The force exerted by the car on the road by the virtue of gravity is 15000 N=F16: At any given time, 1270000 people are airborne.=F17: There are a total of 40 balls in the school, 10 of each sport.=F18: The density of air is 1.3 kg/metre cube=F19: The normal size of a cell is 1e-6 m=F20: The bee flies for a total of around 4 hours each day.",
        "fact_transform": {
            "15": 0,
            "11": 1
        }
    },
    {
        "question": "What is the surface area of the skin of an average human?",
        "program": "PROGRAM:=Q1: What is the volume of an average human?=Q2: What is the height of an average human?=A1: 62000 cm**3=A2: 170 cm=Q2 -> A2 | F11=Q1 -> A1 | F3=P: Div (Q1, Q2)",
        "answer": "365 cm**2",
        "context": "CONTEXT:=F1: The average force exerted by releasing a rubber band is 10 N=F2: An average farm produces around 52000 pounds of food each year.=F3: The volume of an average human is 62000 cc=F4: There are 24 hours in a single day.=F5: The thickness of the connecting parts in a microchip is 0.9e-9 m=F6: The distance from earth to moon is 384400 km=F7: The rate of perspiration of skin is 1.5 L/hour=F8: The length of a nerd rope is 12 inches=F9: We gain around 2200 cal walking around equator all day, naked.=F10: The thickness of an average atom is 0.3e-9 m=F11: The height of an average human is 170 cm=F12: The average force exerted while crushing a human skull is 2300 N=F13: The normal size of a cell is 1e-6 m=F14: The minimum size visible to a human is 1e-4 m=F15: The thickness of a single sheet of paper is 1e-7 km=F16: The circumference of the Earth is 1577756575 inches=F17: The limit of a planet size is 10x that of jupiter.=F18: An average person's annual consumption of food is 1996 pounds=F19: The size of Jupiter is 1.4e+15 km cube.=F20: The rate of perspiration of leaves is 1.8 L/hour",
        "fact_transform": {
            "2": 0,
            "10": 1
        }
    },
    {
        "question": "What fraction of the earth's water is equal to the water in an adult male human?",
        "program": "PROGRAM:=Q1: What is total water present in an average human?=Q2: What is the total water present on earth?=A1: 3.7e-11 km**3=A2: 1.38e+9 km**3=Q2 -> A2 | F11=Q1 -> A1 | F1=P: Div (Q1, Q2)",
        "answer": "2.60E-20",
        "context": "CONTEXT:=F1: The total water present in an average human is 3.7e-11 km**3=F2: The volume of a single water drop is 18e-10 cubic metre=F3: The radius of Earth is 4000 miles=F4: An average person's annual consumption of food is 1996 pounds=F5: The size of Jupiter is 1.4e+15 km cube.=F6: The volume of a golf ball is 4e-5 km**3=F7: The volume of the oceans is 1.3e+9 km**3=F8: The total volume of water molecules is 32000000 cubic miles=F9: The total volume of earth's oceans is 300000000 cubic miles=F10: The volume of a sphere is 4 times the radius cube.=F11: The total water present on earth is 1.38e+9 km**3=F12: The total volume of the ocean cover is 300000000 cubic miles=F13: The limit of a planet size is 10x that of jupiter.=F14: The density of a single water molecule is 4.156e+12 kg/cubic mile=F15: The cube of the radius of earth is radius powered to 3=F16: An average farm produces around 52000 pounds of food each year.=F17: The total world population is 7.2e+9=F18: The average fish consumption of a single person is 16.5 kgs per year (according to a survey in 2005)=F19: The total volume of the earth is 259875159532 cubic miles=F20: The average surface area in earth's oceans is 130434782 squaremiles",
        "fact_transform": {
            "0": 0,
            "10": 1
        }
    },
    {
        "question": "What is the volume of air that I breathe in one day?",
        "program": "PROGRAM:=Q1: How many minutes are there in a day?=Q2: How much air do humans inhale each minute?=Q3: How many hours are there in a day?=Q4: How many minutes make up an hour?=A1: 6 L*min**-1=A2: 24=A3: 60 min=Q4 -> A3 | F8=Q3 -> A2 | F19=Q2 -> Mul (Q3, Q4)=Q1 -> A1 | F1=P: Mul (Q1, Q2)",
        "answer": "8640 L",
        "context": "CONTEXT:=F1: An average human inhales 6 liters of air every minute=F2: There are 1000000 numbers in a million=F3: There are a total of 40 balls in the school, 10 of each sport.=F4: The height is 1.73 m=F5: The average air present inside these balls is 0.8 atmospheres of air.=F6: The bee flies for a total of around 4 hours each day.=F7: The radius of Earth is 4000 miles=F8: 60 minutes make up an hour.=F9: There are 365 days in a year.=F10: There are 60 seconds in a minute.=F11: The volume of a typical room is 60 metre cube=F12: The average speed at which a bee flies is 15 miles per hour=F13: The volume of a sphere is 4 times the radius cube.=F14: The average sleep quantity of a person is 8 hours=F15: There are 60 minutes in an hour.=F16: The average life expectancy is 72 years=F17: The cube of the radius of earth is radius powered to 3=F18: The density of air is 1.3 kg/metre cube=F19: There are 24 hours in a day.=F20: It takes around 1 second to count a number",
        "fact_transform": {
            "0": 0,
            "18": 1,
            "7": 2
        }
    },
    {
        "question": "How many people do we meet in our life?",
        "program": "PROGRAM:=Q1: What is the average life expectancy?=Q2: How many new people do we meet annually?=A1: 72=A2: 140=Q2 -> A2 | F3=Q1 -> A1 | F16=P: Mul (Q1, Q2)",
        "answer": "10080",
        "context": "CONTEXT:=F1: There are 24 hours in a day.=F2: The average thickness of a sheet of paper is 0.00008 m=F3: On an average, we meet 140 new people every year.=F4: The minimum size visible to a human is 1e-4 m=F5: An average coin minting facility is 120 years old.=F6: The total number of school aged kids in an average US city is 242349=F7: An average of 1e+8 coins are minted each year by a facility.=F8: The limit of a planet size is 10x that of jupiter.=F9: The size of Jupiter is 1.4e+15 km cube.=F10: There are 1000000 numbers in a million=F11: The population given is 1e+6=F12: The total land area on Earth is 501e+6 km square=F13: The height is 1.73 m=F14: There are 60 seconds in a minute.=F15: The normal size of a cell is 1e-6 m=F16: The average life expectancy is 72 years.=F17: Considering people to be in the midpoint of their areas (assuming to be squares), so they have to travel the length of their square to reach another person.=F18: It takes around 1 second to count a number=F19: There are 60 minutes in an hour.=F20: The total number of students attending school in an average US city is 210843",
        "fact_transform": {
            "15": 0,
            "2": 1
        }
    },
    {
        "question": "What is the volume (cubic miles) of the earth?",
        "program": "PROGRAM:=Q1: What is the radius of the Earth?=Q2: What is the relations between radius and volume of a sphere?=Q3: What is the cube of the radius of earth?=A1: 4=A2: 3=A3: 4000 miles=Q1 -> A3 | F17=Q3 -> Pow (Q1, 3)=Q2 -> A1 | F3=P: Mul(Q2, Q3)",
        "answer": "256000000000 miles**3",
        "context": "CONTEXT:=F1: There are around 1000 significantly big clouds in the sky.=F2: The average volume of a single cherry is 4.1 cc.=F3: The volume of a sphere is 4 times the radius cube.=F4: The total volume of the earth is 259875159532 cubic miles=F5: Each significantly big cloud, contains about 192000 km**3 of water in it.=F6: 417234 cherries are going to be loosely stacked.=F7: There are 24 hours in a day.=F8: The average surface area in earth's oceans is 130434782 squaremiles=F9: The total water present on earth is 1.38e+9 km**3=F10: The volume of one molecule of water is 3e-23 cc=F11: An average human inhales 6 liters of air every minute=F12: The limit of a planet size is 10x that of jupiter.=F13: The total volume of the ocean cover is 300000000 cubic miles=F14: The total volume of earth's oceans is 300000000 cubic miles=F15: The cube of the radius of earth is radius powered to 3=F16: The size of Jupiter is 1.4e+15 km cube.=F17: The radius of Earth is 4000 miles=F18: The total water present in an average human is 3.7e-11 km**3=F19: The volume of cup of water is 250 cc=F20: 60 minutes make up an hour.",
        "fact_transform": {
            "16": 0,
            "2": 1,
            "14": 2
        }
    },
    {
        "question": "What portion of all students in the city attends any given school?",
        "program": "PROGRAM:=Q1: What is the total number of students attending school in an average US city?=Q2: What is the total number of school aged kids in an average US city?=A1: 210843=A2: 242349=Q2 -> A2 | F3=Q1 -> A1 | F12=P: Div (Q1, Q2)",
        "answer": "0.84",
        "context": "CONTEXT:=F1: The size of Jupiter is 1.4e+15 km cube.=F2: An average student uses 40 pages per day=F3: The total number of school aged kids in an average US city is 242349=F4: There are 24 hours in a day.=F5: It takes around 1 second to count a number=F6: The average air present inside these balls is 0.8 atmospheres of air.=F7: The average life expectancy is 72 years.=F8: There are 1000000 numbers in a million=F9: There are 516 students in a school.=F10: An average intake of freshman at a university is 550=F11: The limit of a planet size is 10x that of jupiter.=F12: The total number of students attending school in an average US city is 210843=F13: There are 60 minutes in an hour.=F14: There are 7 days in a week.=F15: The number of universities in the US is 5300=F16: There are 60 seconds in a minute.=F17: The normal size of a cell is 1e-6 m=F18: There are a total of 40 balls in the school, 10 of each sport.=F19: On an average, we meet 140 new people every year.=F20: The minimum size visible to a human is 1e-4 m",
        "fact_transform": {
            "11": 0,
            "2": 1
        }
    },
    {
        "question": "If all the pickles sold in the U.S. be arranged side by side, how long would it be?",
        "program": "PROGRAM:=Q1: What is the average length of a pickle?=Q2: How many pickles are sold in the US every year?=A1: 18 cm=A2: 245e+6=Q2 -> A2 | F6=Q1 -> A1 | F20=P: Mul (Q1, Q2)",
        "answer": "4.4e+9 cm",
        "context": "CONTEXT:=F1: 417234 cherries are going to be loosely stacked.=F2: There are 1000000 numbers in a million=F3: The duration of my favorite song is 3 minutes.=F4: Around 7000 softballs are produced daily. (Assumption)=F5: The average speed at which a bee flies is 15 miles per hour=F6: Around 245e+6 pickles are sold in the US every year.=F7: There are 60 seconds in a minute.=F8: It takes around 1 second to count a number=F9: There are 1440 minutes in a day.=F10: The thickness of the connecting parts in a microchip is 0.9e-9 m=F11: An average American, buys 12 books each year.=F12: The bee flies for a total of around 4 hours each day.=F13: There are 261 working days in a year.=F14: The average volume of a single cherry is 4.1 cc.=F15: The thickness of an average atom is 0.3e-9 m=F16: There are 365 days in a year.=F17: There are 24 hours in a day.=F18: The population of US is 348200000=F19: There are 60 minutes in an hour.=F20: The average length of a pickle is around 18 cm.",
        "fact_transform": {
            "19": 0,
            "5": 1
        }
    },
    {
        "question": "What is the weight of a golden egg?",
        "program": "PROGRAM:=Q1: What is the weight of a normal egg?=Q2: What is the ratio of densities of gold to the egg?=Q3: What is the density of gold?=Q4: What is the density of a normal egg?=A1: 60g=A2: 19.3g*cm**-3=A3: 1.03 g*cm**-3=Q4 -> A3 | F14=Q3 -> A2 | F12=Q2 -> Div (Q3, Q4)=Q1 -> A1 | F8=P: Mul (Q1, Q2)",
        "answer": "1124 grams",
        "context": "CONTEXT:=F1: There are 60 minutes in an hour.=F2: The height at which the rock is falling from is 100m.=F3: The minimum size visible to a human is 1e-4 m=F4: There are 24 hours in a day.=F5: The average gold present in a shipwreck is 20000 USD=F6: There are 60 seconds in a minute.=F7: The normal size of a cell is 1e-6 m=F8: The weight of a normal egg is 60 g=F9: The mass of the rock is 2000 kg=F10: It takes around 1 second to count a number=F11: The acceleration due to gravity acting on the rock is 10m/s**2=F12: The density of gold is 19.3g/cc=F13: The density of gold atom is 19.32 g/cc=F14: The density of a normal egg is 1.03 g/cc=F15: There are 1000000 numbers in a million=F16: The height is 1.73 m=F17: There are a total of 3e+6 shipwrecks currently under water now.=F18: The number of atoms present in gold's nucleus is 197=F19: The limit of a planet size is 10x that of jupiter.=F20: The size of Jupiter is 1.4e+15 km cube.",
        "fact_transform": {
            "7": 0,
            "11": 1,
            "13": 2
        }
    },
    {
        "question": "How many sheets of paper, laid flat, will it take to reach the moon from the Earth?",
        "program": "PROGRAM:=Q1: What is the distance from earth to moon?=Q2: What is the thickness of a single sheet of paper?=A1: 384400 km=A2: 1e-7 km=Q2 -> A2 | F11=Q1 -> A1 | F6=P: Div (Q1, Q2)",
        "answer": "3844000000000",
        "context": "CONTEXT:=F1: The rate of perspiration of leaves is 1.8 L/hour=F2: The thickness of the connecting parts in a microchip is 0.9e-9 m=F3: There are 24 hours in a day.=F4: The time interval between two full moons is 30 days=F5: There are 24 hours in a single day.=F6: The distance from earth to moon is 384400 km=F7: The thickness of an average atom is 0.3e-9 m=F8: The limit of a planet size is 10x that of jupiter.=F9: The speed of light in kmph is 1.079e+9 kmph=F10: An average model rocket (drone), can carry 40 lbs.=F11: The thickness of a single sheet of paper is 1e-7 km=F12: The rate of perspiration of skin is 1.5 L/hour=F13: The weight of the person is 140 lb=F14: The volume of an average human is 62000 cc=F15: The height of an average human is 170 cm=F16: The size of Jupiter is 1.4e+15 km cube.=F17: The volume of the oceans is 1.3e+9 km**3=F18: We gain around 2200 cal walking around equator all day, naked.=F19: The speed at which Earth moves is 1656 kmph=F20: The volume of a golf ball is 4e-5 km**3",
        "fact_transform": {
            "5": 0,
            "10": 1
        }
    },
    {
        "question": "How much fish do humans consume per year?",
        "program": "PROGRAM:=Q1: What is the total human population?=Q2: What is the average fish consumption of a single person in a year?=A1: 7.2e+9=A2: 16.5 kg=Q2 -> A2 | F13=Q1 -> A1 | F4=P: Mul (Q1, Q2)",
        "answer": "1.18e+11 kg",
        "context": "CONTEXT:=F1: There are 365 days in a year.=F2: The density of a single water molecule is 4.156e+12 kg/cubic mile=F3: The size of Jupiter is 1.4e+15 km cube.=F4: The total world population is 7.2e+9=F5: The total water present in an average human is 3.7e-11 km**3=F6: The volume of the oceans is 1.3e+9 km**3=F7: The volume of the swimming pool is 2500 cubic metre=F8: The average life expectancy is 72 years=F9: The average sleep quantity of a person is 8 hours=F10: The volume of a golf ball is 4e-5 km**3=F11: The total volume of the earth is 259875159532 cubic miles=F12: The total volume of water in the oceans is 321000000 cubic miles=F13: The average fish consumption of a single person is 16.5 kgs per year (according to a survey in 2005)=F14: The total volume of water molecules is 32000000 cubic miles=F15: The total volume of the ocean cover is 300000000 cubic miles=F16: The limit of a planet size is 10x that of jupiter.=F17: The total volume of earth's oceans is 300000000 cubic miles=F18: The volume of a single water drop is 18e-10 cubic metre=F19: The total water present on earth is 1.38e+9 km**3=F20: The average surface area in earth's oceans is 130434782 squaremiles",
        "fact_transform": {
            "3": 0,
            "12": 1
        }
    },
    {
        "question": "How many rubber bands would it take to crush a human skull?",
        "program": "PROGRAM:=Q1: What is the force exerted to crush a human skull?=Q2: What is the average force exerted by releasing a rubber band?=A1: 2300 N=A2: 10 N=Q2 -> A2 | F20=Q1 -> A1 | F15=P: Div (Q1, Q2)",
        "answer": "230",
        "context": "CONTEXT:=F1: There are 1000000 numbers in a million=F2: The amount of calories present in a chips bag is 1242.=F3: The length of a nerd rope is 12 inches=F4: The thickness of an average atom is 0.3e-9 m=F5: The size of Jupiter is 1.4e+15 km cube.=F6: The volume of a single post-it sheet is 0.007 cubic metre=F7: An average model rocket (drone), can carry 40 lbs.=F8: The weight of the person is 140 lb=F9: There are 24 hours in a day.=F10: The height is 1.73 m=F11: The limit of a planet size is 10x that of jupiter.=F12: The volume of a single Cessna 172 is 248 cubic metre=F13: The average thickness of a sheet of paper is 0.00008 m=F14: The thickness of the connecting parts in a microchip is 0.9e-9 m=F15: The average force exerted while crushing a human skull is 2300 N=F16: The number of calories burnt while climbing a step is 0.17 calories=F17: There are 60 minutes in an hour.=F18: It takes around 1 second to count a number=F19: The circumference of the Earth is 1577756575 inches=F20: The average force exerted by releasing a rubber band is 10 N",
        "fact_transform": {
            "14": 0,
            "19": 1
        }
    },
    {
        "question": "What is the average depth (cm) of the earth's oceans?",
        "program": "PROGRAM:=Q1: What is the total volume of earth's oceans?=Q2: What is the surface area of earth's oceans?=A1: 300000000 miles**3=A2: 130434782 miles**2=Q2 -> A2 | F14=Q1 -> A1 | F1=P: Div(Q1, Q2)",
        "answer": "2.3 miles",
        "context": "CONTEXT:=F1: The total volume of earth's oceans is 300000000 cubic miles=F2: The total volume of the earth is 259875159532 cubic miles=F3: The size of Jupiter is 1.4e+15 km cube.=F4: The total volume of water in the oceans is 321000000 cubic miles=F5: The volume of a golf ball is 4e-5 km**3=F6: The radius of Earth is 4000 miles=F7: The total water present on earth is 1.38e+9 km**3=F8: The surface area of the pipe is 0.75 times the diameter square.=F9: The volume of the oceans is 1.3e+9 km**3=F10: The total world population is 7.2e+9=F11: The total volume of water molecules is 32000000 cubic miles=F12: The cube of the radius of earth is radius powered to 3=F13: The volume of a sphere is 4 times the radius cube.=F14: The average surface area in earth's oceans is 130434782 squaremiles=F15: The average fish consumption of a single person is 16.5 kgs per year (according to a survey in 2005)=F16: The total water present in an average human is 3.7e-11 km**3=F17: The limit of a planet size is 10x that of jupiter.=F18: The total volume of the ocean cover is 300000000 cubic miles=F19: The diameter of the pipe is 0.001 miles=F20: The density of a single water molecule is 4.156e+12 kg/cubic mile",
        "fact_transform": {
            "0": 0,
            "13": 1
        }
    },
    {
        "question": "How many drops of water are needed to fill an Olympic swimming pool?",
        "program": "PROGRAM:=Q1: What is the volume of an Olympic swimming pool?=Q2: What is the volume of a single drop of water?=A1: 2500 m**3=A2: 18e-10 m**3=Q2 -> A2 | F15=Q1 -> A1 | F13=P: Div(Q1, Q2)",
        "answer": "1.30E+12",
        "context": "CONTEXT:=F1: The volume of the oceans is 1.3e+9 km**3=F2: The total world population is 7.2e+9=F3: The volume of the water cooler jug given is 5 gallon.=F4: The volume of a single golf ball is 0.01 gallon=F5: There are 1000000 numbers in a million=F6: There are 60 seconds in a minute.=F7: An average temperature of Arizona is 35 degree celsius=F8: It takes around 1 second to count a number=F9: The total volume of the ocean cover is 300000000 cubic miles=F10: The average fish consumption of a single person is 16.5 kgs per year (according to a survey in 2005)=F11: The total volume of the earth is 259875159532 cubic miles=F12: 1 mL heated with 4.1 J can change the temperature by 1 degree celsius.=F13: The volume of the swimming pool is 2500 cubic metre=F14: There are 24 hours in a day.=F15: The volume of a single water drop is 18e-10 cubic metre=F16: There are 60 minutes in an hour.=F17: The total water present in an average human is 3.7e-11 km**3=F18: The total water present on earth is 1.38e+9 km**3=F19: The average temperature of a tropical area is 26 degree celsius.=F20: The volume of a golf ball is 4e-5 km**3",
        "fact_transform": {
            "12": 0,
            "14": 1
        }
    },
    {
        "question": "What is the volume, in cubic meters of the fat contained in all the obese people in the US?",
        "program": "PROGRAM:=Q6: What is the density of fat in pounds per cubic meter?=Q5: Assume that the average American is 10% overweight. How many pounds of fat does the U.S. population carry?=Q1: What is the population of the US?=Q2: What is the fat contained by a single person if they're overweight?=Q3: What is the average weight of a person in the US?=Q4: What percent of fat does an average person in the US have?=A1: 320000000=A2: 198 pounds=A3: 0.1=A4: 2020 pounds*m**-3=Q4 -> A3 | F8=Q3 -> A2 | F4=Q2 -> Mul(Q3, Q4)=Q1 -> A1 | F13=Q5 -> Mul (Q1, Q2)=Q6 -> A4 | F6=P: Div (Q5, Q6)",
        "answer": "3136634 m**3",
        "context": "CONTEXT:=F1: An average American, buys 12 books each year.=F2: An average human inhales 6 liters of air every minute=F3: The cube of the radius of earth is radius powered to 3=F4: The average weight of a person in the US is 90 kg=F5: 6 pounds make up a single gallon of gasoline.=F6: The density of average body fat is 2020 pounds per cubic meter=F7: 60 minutes make up an hour.=F8: An average US person has about 10 percent of his body weight as fat.=F9: Around 245e+6 pickles are sold in the US every year.=F10: The average length of a pickle is around 18 cm.=F11: The population of US is 348200000=F12: The average mass of an animal is 15 kg.=F13: The population of US 320000000=F14: The average mass of a human is 62 kg.=F15: The volume of a sphere is 4 times the radius cube.=F16: An average car consumes about 656 gallons per year=F17: The fat equivalent of obese people in the country is 6336000000 pounds=F18: The radius of Earth is 4000 miles=F19: The average number of animals that die every year due to roadkill in USA is 253000.=F20: There are 24 hours in a day.",
        "fact_transform": {
            "12": 0,
            "3": 1,
            "7": 2,
            "5": 3
        }
    },
    {
        "question": "How much CO2 is currently stored inside of unopened containers of soda?",
        "program": "PROGRAM:=Q1: How much CO2 is in a can of soda?=Q2: How many soda cans are manufactured each day?=A1: 0.17 kg=A2: 1e+9=Q2 -> A2 | F17=Q1 -> A1 | F1=P: Mul (Q1, Q2)",
        "answer": "1.7e+8 kg",
        "context": "CONTEXT:=F1: 170g of CO2 is there in a can of soda.=F2: 1 mL heated with 4.1 J can change the temperature by 1 degree celsius.=F3: An average car consumes about 656 gallons per year=F4: The rate of perspiration of leaves is 1.8 L/hour=F5: We gain around 2200 cal walking around equator all day, naked.=F6: The mass of the corona virus in a patient's body is 50e-6 grams=F7: The total number of people associated with CoronaVirus right now are 1.58e+6=F8: The volume of the oceans is 1.3e+9 km**3=F9: The average temperature of a tropical area is 26 degree celsius.=F10: The thickness of the connecting parts in a microchip is 0.9e-9 m=F11: The rate of perspiration of skin is 1.5 L/hour=F12: The limit of a planet size is 10x that of jupiter.=F13: The fat equivalent of obese people in the country is 6336000000 pounds=F14: The volume of a golf ball is 4e-5 km**3=F15: An average temperature of Arizona is 35 degree celsius=F16: 6 pounds make up a single gallon of gasoline.=F17: Around 1e+9 cans are made every day.=F18: The size of Jupiter is 1.4e+15 km cube.=F19: The thickness of an average atom is 0.3e-9 m=F20: The mass of a maus tank is 170551 kg",
        "fact_transform": {
            "0": 0,
            "16": 1
        }
    },
    {
        "question": "How many times has Tiger Woods swung a golf club in his life?",
        "program": "PROGRAM:=Q1: How many matches had Tiger Woods played in his entire career?=Q2: What is the average number of times a golfer swings his golf club in a match and its preparation process?=Q3: How many times does an average golfer swing his golf club in a match?=Q4: What is the practice-match preparation ratio of Tiger Woods as a golfer?=A1: 368=A2: 15=A3: 10=Q4 -> A3 | F11=Q3 -> A2 | F3=Q2 -> Mul (Q3, Q4)=Q1 -> A1 | F19=P: Mul (Q1, Q2)",
        "answer": "55200",
        "context": "CONTEXT:=F1: The volume of a golf ball is 4e-5 km**3=F2: The average body height of a person is 170 cm.=F3: An average golfer swings his club around 15 times in a match.=F4: The bee flies for a total of around 4 hours each day.=F5: The average speed at which a bee flies is 15 miles per hour=F6: The volume of a single post-it sheet is 0.007 cubic metre=F7: Ideal wingpsan length is 83% of the length of the flying body.=F8: There were around a 100000 sphere and swords during the medieval times (assumption)=F9: The barber has been cutting the hair for 55 years.=F10: The volume of the water cooler jug given is 5 gallon.=F11: The practice-match preparation of Tiger Woods is 25=F12: The average volume of a suitcase is 75000 cubic cm=F13: The volume of a single golf ball is 0.01 gallon=F14: The average volume of a single gold ball is 40.672693 cubic cm=F15: There are around 100000 hairs on our head.=F16: The volume of a single Cessna 172 is 248 cubic metre=F17: The average length of hair cut in a single haircut is 1.8e-5 miles=F18: The volume of the oceans is 1.3e+9 km**3=F19: Tiger Woods has played a total of=F20: Around 20% of the ancient weapons have been preserved and are still existing right now.",
        "fact_transform": {
            "18": 0,
            "2": 1,
            "10": 2
        }
    },
    {
        "question": "What is the total number of spears and swords surviving today from medieval times?",
        "program": "PROGRAM:=Q1: How many spheres and swords were there in medieval times?=Q2: What percent of the ancient weapons are still existing currently?=A1: 100000=A2: 0.2=Q2 -> A2 | F17=Q1 -> A1 | F15=P: Mul (Q1, Q2)",
        "answer": "20000",
        "context": "CONTEXT:=F1: The lungs and heart are 15 times deeper when compared to the skin.=F2: The average body height of a person is 170 cm.=F3: Ideal wingpsan length is 83% of the length of the flying body.=F4: It takes around 1 minute for the heat to peel off the skin.=F5: The height of a Shard is 244 metres=F6: The total world population is 7.2e+9=F7: The volume of the oceans is 1.3e+9 km**3=F8: The volume of an ant is 1e-8 metre cube=F9: The weight of the person is 140 lb=F10: The average thickness of a sheet of paper is 0.00008 m=F11: The volume of a golf ball is 4e-5 km**3=F12: The height is 1.73 m=F13: There are 24 hours in a day.=F14: 74.2e+6 under 18 kids are there in the USA=F15: There were around a 100000 sphere and swords during the medieval times (assumption)=F16: The time interval between two full moons is 30 days=F17: Around 20% of the ancient weapons have been preserved and are still existing right now.=F18: The surface area of The Shard is 398490 sq. metre=F19: An average model rocket (drone), can carry 40 lbs.=F20: The number of felons and convicts in the US is around 5 million.",
        "fact_transform": {
            "14": 0,
            "16": 1
        }
    },
    {
        "question": "How many Gluesticks Fit in a Horse?",
        "program": "PROGRAM:=Q1: What is the volume of a horse?=Q2: What is the volume of a glue stick?=A1: 500000 cm**3=A2: 100 cm**3=Q2 -> A2 | F15=Q1 -> A1 | F6=P: Div (Q1, Q2)",
        "answer": "5000",
        "context": "CONTEXT:=F1: The average force exerted while crushing a human skull is 2300 N=F2: The circumference of the Earth is 1577756575 inches=F3: The average volume of a single gold ball is 40.672693 cubic cm=F4: The average thickness of a sheet of paper is 0.00008 m=F5: The volume of a single Cessna 172 is 248 cubic metre=F6: The volume of a horse is 500000 cc=F7: The thickness of an average atom is 0.3e-9 m=F8: The length of a nerd rope is 12 inches=F9: The mass of Donald Trump is 111 kg=F10: The weight of the person is 140 lb=F11: The length of a human and it's mass and linearly directly proportional to each other and the length of Donald Trump is 190 cm=F12: The amount of calories present in a chips bag is 1242.=F13: The volume of a single post-it sheet is 0.007 cubic metre=F14: The average volume of a suitcase is 75000 cubic cm=F15: The volume of glue stick is 100 cc=F16: An average model rocket (drone), can carry 40 lbs.=F17: The mass of an average Clydesdale horse is 850 kg=F18: The thickness of the connecting parts in a microchip is 0.9e-9 m=F19: The number of calories burnt while climbing a step is 0.17 calories=F20: The average force exerted by releasing a rubber band is 10 N",
        "fact_transform": {
            "5": 0,
            "14": 1
        }
    },
    {
        "question": "What is the total carcass weight of roadkill in USA each year?",
        "program": "PROGRAM:=Q1: What is the carcass weight of animals killed in roadkill in a year?=Q2: What is the carcass weight of humans killed in roadkill in a year?=Q3: How many humans die due to roadkill every year?=Q4: What is the average mass of a human?=Q5: What is the number of animals that die every year due to roadkill?=Q6: What is the average mass of an animal?=A1: 38000=A2: 62 kg=A3: 253000=A4: 15 kg=Q6 -> A4 | F13=Q5 -> A3 | F7=Q2 -> Mul (Q5, Q6)=Q4 -> A2 | F4=Q3 -> A1 | F16=Q1 -> Mul (Q3, Q4)=P: Add (Q1, Q2)",
        "answer": "6151000 kg",
        "context": "CONTEXT:=F1: The average volume of a single dump truck is 3178.32 cubic ft.=F2: The volume of a golf ball is 4e-5 km**3=F3: The weight of the person is 140 lb=F4: The average mass of a human is 62 kg.=F5: It takes around 1 minute for the heat to peel off the skin.=F6: The number of calories burnt while climbing a step is 0.17 calories=F7: The average number of animals that die every year due to roadkill in USA is 253000.=F8: The amount of calories present in a chips bag is 1242.=F9: An average model rocket (drone), can carry 40 lbs.=F10: The number of felons and convicts in the US is around 5 million.=F11: The volume of the oceans is 1.3e+9 km**3=F12: The total volume of the Mount Everest is 2100000000000 cubic ft=F13: The average mass of an animal is 15 kg.=F14: The average force exerted by releasing a rubber band is 10 N=F15: The lungs and heart are 15 times deeper when compared to the skin.=F16: The number of humans who die in roadkill every year in the USA are 38000.=F17: The fat equivalent of obese people in the country is 6336000000 pounds=F18: 74.2e+6 under 18 kids are there in the USA=F19: 6 pounds make up a single gallon of gasoline.=F20: An average car consumes about 656 gallons per year",
        "fact_transform": {
            "15": 0,
            "3": 1,
            "6": 2,
            "12": 3
        }
    },
    {
        "question": "How many kilometers would the Earth have travelled during the time elapsed between two full moons?",
        "program": "PROGRAM:=Q1: What is the speed at which Earth moves?=Q2: What is the duration between two full moons?=Q3: What is the time interval between two full moons?=Q4: How many hours do we have in a day?=A1: 1656 km*hour**-1=A2: 30=A3: 24 hour=Q4 -> A3| F7=Q3 -> A2| F14=Q2 -> Mul (Q3, Q4)=Q1 -> A1| F17=P: Mul (Q1, Q2)",
        "answer": "1192320 km",
        "context": "CONTEXT:=F1: The thickness of a single sheet of paper is 1e-7 km=F2: The limit of a planet size is 10x that of jupiter.=F3: The size of Jupiter is 1.4e+15 km cube.=F4: The distance from earth to moon is 384400 km=F5: There are 24 hours in a day.=F6: The average life expectancy is 72 years=F7: There are 24 hours in a single day.=F8: The speed of light in kmph is 1.079e+9 kmph=F9: There are 365 days in a year.=F10: The average body height of a person is 170 cm.=F11: An average model rocket (drone), can carry 40 lbs.=F12: We gain around 2200 cal walking around equator all day, naked.=F13: The rate of perspiration of skin is 1.5 L/hour=F14: The time interval between two full moons is 30 days=F15: The weight of the person is 140 lb=F16: The rate of perspiration of leaves is 1.8 L/hour=F17: The speed at which Earth moves is 1656 kmph=F18: The thickness of the connecting parts in a microchip is 0.9e-9 m=F19: The average sleep quantity of a person is 8 hours=F20: The thickness of an average atom is 0.3e-9 m",
        "fact_transform": {
            "16": 0,
            "13": 1,
            "6": 2
        }
    },
    {
        "question": "How many nerd ropes would it take to go around the Earth?",
        "program": "PROGRAM:=Q1: What is the circumference of the Earth?=Q2: What is the length of a nerd rope?=A1: 1577756575 in=A2: 12 in=Q2 -> A2 | F12=Q1 -> A1 | F18=P: Div (Q1, Q2)",
        "answer": "131479714",
        "context": "CONTEXT:=F1: The average force exerted while crushing a human skull is 2300 N=F2: The height is 1.73 m=F3: The number of calories burnt while climbing a step is 0.17 calories=F4: The amount of calories present in a chips bag is 1242.=F5: The thickness of the connecting parts in a microchip is 0.9e-9 m=F6: The weight of the person is 140 lb=F7: The size of Jupiter is 1.4e+15 km cube.=F8: The average force exerted by releasing a rubber band is 10 N=F9: The thickness of an average atom is 0.3e-9 m=F10: There are 24 hours in a day.=F11: There are 60 seconds in a minute.=F12: The length of a nerd rope is 12 inches=F13: It takes around 1 second to count a number=F14: There are 60 minutes in an hour.=F15: The volume of a golf ball is 4e-5 km**3=F16: The limit of a planet size is 10x that of jupiter.=F17: The average thickness of a sheet of paper is 0.00008 m=F18: The circumference of the Earth is 1577756575 inches=F19: There are 1000000 numbers in a million=F20: An average model rocket (drone), can carry 40 lbs.",
        "fact_transform": {
            "17": 0,
            "11": 1
        }
    },
    {
        "question": "How many golf balls could you fit in a 5 gallon water cooler jug?",
        "program": "PROGRAM:=Q1: What is the volume of the water cooler jug given?=Q2: What is the volume of a single golf ball?=A1: 5 gal=A2: 0.01 gal=Q2 -> A2 | F17=Q1 -> A1 | F2=P: Div (Q1, Q2)",
        "answer": "500",
        "context": "CONTEXT:=F1: The weight of the person is 140 lb=F2: The volume of the water cooler jug given is 5 gallon.=F3: The thickness of an average atom is 0.3e-9 m=F4: The mass of an average Clydesdale horse is 850 kg=F5: The size of Jupiter is 1.4e+15 km cube.=F6: The average volume of a suitcase is 75000 cubic cm=F7: The limit of a planet size is 10x that of jupiter.=F8: The average volume of a single gold ball is 40.672693 cubic cm=F9: The volume of a golf ball is 4e-5 km**3=F10: The volume of the swimming pool is 2500 cubic metre=F11: The volume of a single water drop is 18e-10 cubic metre=F12: The volume of the oceans is 1.3e+9 km**3=F13: The mass of Donald Trump is 111 kg=F14: An average model rocket (drone), can carry 40 lbs.=F15: 1 mL heated with 4.1 J can change the temperature by 1 degree celsius.=F16: The thickness of the connecting parts in a microchip is 0.9e-9 m=F17: The volume of a single golf ball is 0.01 gallon=F18: The length of a human and it's mass and linearly directly proportional to each other and the length of Donald Trump is 190 cm=F19: An average temperature of Arizona is 35 degree celsius=F20: The average temperature of a tropical area is 26 degree celsius.",
        "fact_transform": {
            "1": 0,
            "16": 1
        }
    },
    {
        "question": "How many cells are needed to visible to a person?",
        "program": "PROGRAM:=Q1: What is the minimum size of an object that falls under the visible range of a human?=Q2: What is the normal size of a cell?=A1: 1e-4 m=A2: 1e-6 m=Q2 -> A2| F6=Q1 -> A1 | F13=P: Div (Q1, Q2)",
        "answer": "100",
        "context": "CONTEXT:=F1: The average speed at which a bee flies is 15 miles per hour=F2: The average body height of a person is 170 cm.=F3: The size of Jupiter is 1.4e+15 km cube.=F4: There are 60 minutes in an hour.=F5: It takes around 1 second to count a number=F6: The normal size of a cell is 1e-6 m=F7: Ideal wingpsan length is 83% of the length of the flying body.=F8: The height is 1.73 m=F9: The thickness of the connecting parts in a microchip is 0.9e-9 m=F10: The time interval between two full moons is 30 days=F11: The average thickness of a sheet of paper is 0.00008 m=F12: The limit of a planet size is 10x that of jupiter.=F13: The minimum size visible to a human is 1e-4 m=F14: The bee flies for a total of around 4 hours each day.=F15: The thickness of an average atom is 0.3e-9 m=F16: The volume of an average human is 62000 cc=F17: There are 1000000 numbers in a million=F18: The height of an average human is 170 cm=F19: There are 60 seconds in a minute.=F20: There are 24 hours in a day.",
        "fact_transform": {
            "12": 0,
            "5": 1
        }
    },
    {
        "question": "How much does it cost to leave a light on for an entire year?",
        "program": "PROGRAM:=Q1: How much does it cost to power a light for a day?=Q2: How many days are there in a year?=A1: 0.005=A2: 365=Q1 -> A1 | F17=Q2 -> A2 | F12=P: Mul (Q1, Q2)",
        "answer": "$1.83",
        "context": "CONTEXT:=F1: There are 60 seconds in a minute.=F2: The surface area of a human body is 0.85 metre square (one side)=F3: The average sleep quantity of a person is 8 hours=F4: The speed of light in kmph is 1.079e+9 kmph=F5: There are 24 hours in a single day.=F6: The normal size of a cell is 1e-6 m=F7: The surface area of a leaf is 0.0075 metre square (one side)=F8: The rate of perspiration of skin is 1.5 L/hour=F9: The minimum size visible to a human is 1e-4 m=F10: There are 24 hours in a day.=F11: We gain around 2200 cal walking around equator all day, naked.=F12: There are 365 days in a year.=F13: The energy produced by a leaf during photosynthesis daily is 200 cal.=F14: The rate of perspiration of leaves is 1.8 L/hour=F15: The average life expectancy is 72 years=F16: An average person's annual consumption of food is 1996 pounds=F17: The cost to power a light for a day is 0.005 USD=F18: The time interval between two full moons is 30 days=F19: It takes an average of 50 hp while applying brakes to stop the car from moving forward.=F20: An average farm produces around 52000 pounds of food each year.",
        "fact_transform": {
            "16": 0,
            "11": 1
        }
    },
    {
        "question": "How many model rockets would it take to propel a 140 lb human?",
        "program": "PROGRAM:=Q1: What is the weight of a person, a model rocket (drone) can handle on an average?=Q2: What is the weight of the person given?=A1: 40 lbs=A2: 140 lbs=Q2 -> A2 | F3=Q1 -> A1 | F15=P: Div (Q2, Q1)",
        "answer": "4",
        "context": "CONTEXT:=F1: The average body height of a person is 170 cm.=F2: Ideal wingpsan length is 83% of the length of the flying body.=F3: The weight of the person is 140 lb=F4: The height is 1.73 m=F5: The size of Jupiter is 1.4e+15 km cube.=F6: The length of a nerd rope is 12 inches=F7: The average force exerted while crushing a human skull is 2300 N=F8: The number of calories burnt while climbing a step is 0.17 calories=F9: The thickness of the connecting parts in a microchip is 0.9e-9 m=F10: The amount of calories present in a chips bag is 1242.=F11: The force exerted by the car on the road by the virtue of gravity is 15000 N=F12: The volume of a single post-it sheet is 0.007 cubic metre=F13: The circumference of the Earth is 1577756575 inches=F14: The limit of a planet size is 10x that of jupiter.=F15: An average model rocket (drone), can carry 40 lbs.=F16: The volume of a single Cessna 172 is 248 cubic metre=F17: The average force exerted by releasing a rubber band is 10 N=F18: The thickness of an average atom is 0.3e-9 m=F19: The force exerted by the wind travelling by metre per hour is 4.6e-4 N-hour/metre=F20: The average thickness of a sheet of paper is 0.00008 m",
        "fact_transform": {
            "14": 0,
            "2": 1
        }
    },
    {
        "question": "The Ontario government decides that winter is too depressing and that what is really needed is to turn all of Lake Ontario into one giant mug of hot chocolate. Find the number of packets of hot chocolate powder required to make this much hot chocolate.",
        "program": "PROGRAM:=Q1: What is the volume of Lake Ontario?=Q2: How many packets does it take to make a hot chocolate of 1 cc?=A1: 1.64e+6=A2: 4000=Q2 -> A2 | F17=Q1 -> A1 | F16=P: Mul(Q1, Q2)",
        "answer": "6.56E+09",
        "context": "CONTEXT:=F1: It takes around 1 second to count a number=F2: The size of Jupiter is 1.4e+15 km cube.=F3: An average temperature of Arizona is 35 degree celsius=F4: There are 24 hours in a day.=F5: 1 mL heated with 4.1 J can change the temperature by 1 degree celsius.=F6: The amount of calories present in a chips bag is 1242.=F7: The volume of the oceans is 1.3e+9 km**3=F8: The total volume of Mediterranean Sea is 439000 km cube=F9: The weight of the person is 140 lb=F10: The number of calories burnt while climbing a step is 0.17 calories=F11: An average model rocket (drone), can carry 40 lbs.=F12: The average temperature of a tropical area is 26 degree celsius.=F13: The limit of a planet size is 10x that of jupiter.=F14: There are 60 minutes in an hour.=F15: There are 1000000 numbers in a million=F16: The volume of Lake Ontario is 1.64e+6 m**3=F17: It takes 4000 packets to make a hot chocolate of 1 meter cube=F18: The rate at which waters flows in a typical sea is 6.4 kmph=F19: The volume of a golf ball is 4e-5 km**3=F20: There are 60 seconds in a minute.",
        "fact_transform": {
            "15": 0,
            "16": 1
        }
    },
    {
        "question": "How much tire rubber, in lbs, is shed by normal wear and tear of car tires in the USA each year?",
        "program": "PROGRAM:=Q1: What is the collective drop in weight of tyres of a car in a month?=Q2: How many months are there in a year?=A1: 0.22 lbs=A2: 12=Q2 -> A2 | F20=Q1 -> A1 | F7=P: Mul (Q1, Q2)",
        "answer": "2.64 lbs",
        "context": "CONTEXT:=F1: The volume of the oceans is 1.3e+9 km**3=F2: The volume of a single post-it sheet is 0.007 cubic metre=F3: The average force exerted while crushing a human skull is 2300 N=F4: The average length of a pickle is around 18 cm.=F5: An average American, buys 12 books each year.=F6: The average force exerted by releasing a rubber band is 10 N=F7: The collective drop in weight of a car in a month is 0.22 lbs=F8: The volume of a golf ball is 4e-5 km**3=F9: The average temperature of a tropical area is 26 degree celsius.=F10: The thickness of the connecting parts in a microchip is 0.9e-9 m=F11: Around 245e+6 pickles are sold in the US every year.=F12: The thickness of an average atom is 0.3e-9 m=F13: The volume of a single Cessna 172 is 248 cubic metre=F14: The fat equivalent of obese people in the country is 6336000000 pounds=F15: 1 mL heated with 4.1 J can change the temperature by 1 degree celsius.=F16: The population of US is 348200000=F17: An average temperature of Arizona is 35 degree celsius=F18: 6 pounds make up a single gallon of gasoline.=F19: An average car consumes about 656 gallons per year=F20: There are 12 months in a year.",
        "fact_transform": {
            "6": 0,
            "19": 1
        }
    },
    {
        "question": "What is the total length of waterslides in the United States?",
        "program": "PROGRAM:=Q1: Approximately, how many waterslides are there in the US?=Q2: What is the length of an average waterslide?=A1: 2350=A2: 650 ft=Q2 -> A2 | F2=Q1 -> A1 | F13=P: Mul (Q1, Q2)",
        "answer": "1527500 ft",
        "context": "CONTEXT:=F1: The average surface area in earth's oceans is 130434782 squaremiles=F2: The length of an average waterslide is 650 ft=F3: The total volume of the earth is 259875159532 cubic miles=F4: The volume of the oceans is 1.3e+9 km**3=F5: The total volume of water molecules is 32000000 cubic miles=F6: The total volume of the ocean cover is 300000000 cubic miles=F7: The volume of the swimming pool is 2500 cubic metre=F8: The surface area of the pipe is 0.75 times the diameter square.=F9: The total volume of earth's oceans is 300000000 cubic miles=F10: The diameter of the pipe is 0.001 miles=F11: The length of a human and it's mass and linearly directly proportional to each other and the length of Donald Trump is 190 cm=F12: The volume of a golf ball is 4e-5 km**3=F13: There are around 2350 water slides in the US=F14: The volume of a single water drop is 18e-10 cubic metre=F15: The total volume of water in the oceans is 321000000 cubic miles=F16: The average force exerted by releasing a rubber band is 10 N=F17: The average force exerted while crushing a human skull is 2300 N=F18: Around 245e+6 pickles are sold in the US every year.=F19: The density of a single water molecule is 4.156e+12 kg/cubic mile=F20: The average length of a pickle is around 18 cm.",
        "fact_transform": {
            "12": 0,
            "1": 1
        }
    },
    {
        "question": "In a typical cup of brewed tea with no milk, sugar and with leaves strained or tea bag taken out what would be the ratio of the volume of water to tea (excluding plant matter?)",
        "program": "PROGRAM:=Q1: What is the mass of the tea powder in a glass of 200g?=Q2: What is the mass of water in a glass of 200g?=A1: 7 g=A2: 193 g=Q2 -> A2 | F15=Q1 -> A1 | F2=P: Div (Q2, Q1)",
        "answer": "27.5",
        "context": "CONTEXT:=F1: The volume of a golf ball is 4e-5 km**3=F2: The mass of the tea powder in a glass of 200g is 7g.=F3: The diameter of the pipe is 0.001 miles=F4: Number of toilet paper rolls in a lavatory is 1.=F5: The total water present in an average human is 3.7e-11 km**3=F6: We gain around 2200 cal walking around equator all day, naked.=F7: An average temperature of Arizona is 35 degree celsius=F8: 1 mL heated with 4.1 J can change the temperature by 1 degree celsius.=F9: The rate of perspiration of leaves is 1.8 L/hour=F10: The total volume of water in the oceans is 321000000 cubic miles=F11: The volume of a single golf ball is 0.01 gallon=F12: The total water present on earth is 1.38e+9 km**3=F13: The surface area of the pipe is 0.75 times the diameter square.=F14: The volume of the water cooler jug given is 5 gallon.=F15: The mass of water in a glass of 200g is 193g.=F16: The volume of the oceans is 1.3e+9 km**3=F17: The average temperature of a tropical area is 26 degree celsius.=F18: The volume of cup of water is 250 cc=F19: The rate of perspiration of skin is 1.5 L/hour=F20: The volume of one molecule of water is 3e-23 cc",
        "fact_transform": {
            "1": 0,
            "14": 1
        }
    },
    {
        "question": "What is the total number of shots taken in one NBA season, including the tournament?",
        "program": "PROGRAM:=Q1: How many games are played each season in an NBA game?=Q2: How many shots are attempted in a single NBA game?=A1: 82=A2: 100=Q2 -> A2 | F2=Q1 -> A1 | F15=P: Mul (Q1, Q2)",
        "answer": "8200",
        "context": "CONTEXT:=F1: There are 60 minutes in an hour.=F2: An average of 100 shots are attempted per game.=F3: There are 24 hours in a day.=F4: The duration of my favorite song is 3 minutes.=F5: The volume of the oceans is 1.3e+9 km**3=F6: An average human inhales 6 liters of air every minute=F7: There are 1440 minutes in a day.=F8: There are 1000000 numbers in a million=F9: The density of air is 1.3 kg/metre cube=F10: The volume of a typical room is 60 metre cube=F11: There are 365 days in a year.=F12: There are 60 seconds in a minute.=F13: The average air present inside these balls is 0.8 atmospheres of air.=F14: The limit of a planet size is 10x that of jupiter.=F15: 82 games are played each season in an NBA game=F16: There are a total of 40 balls in the school, 10 of each sport.=F17: It takes around 1 second to count a number=F18: The volume of a golf ball is 4e-5 km**3=F19: 60 minutes make up an hour.=F20: The size of Jupiter is 1.4e+15 km cube.",
        "fact_transform": {
            "14": 0,
            "1": 1
        }
    },
    {
        "question": "What is the average number of bricks used to build a building?",
        "program": "PROGRAM:=Q1: What is the square wall footage of an average house?=Q2: What is the surface area of a single brick?=Q3: What is the perimeter of an average house?=Q4: What is the height of ceiling in the house?=A1: 0.014 meters**2=A2: 4.13 meters=A3: 2.4 meters=Q4 -> A3 | F17=Q3 -> A2 | F11=Q1 -> Mul (Q3, Q4)=Q2 -> A1 | F14=P: Div (Q1, Q2)",
        "answer": "708",
        "context": "CONTEXT:=F1: An average human inhales 6 liters of air every minute=F2: The density of gold is 19.3g/cc=F3: The surface area of a brick is 4 sq. feet=F4: There are around 250 coin minting facilities in the world.=F5: An average coin minting facility is 120 years old.=F6: The normal size of a cell is 1e-6 m=F7: There are 24 hours in a day.=F8: The height is 1.73 m=F9: 60 minutes make up an hour.=F10: The average thickness of a sheet of paper is 0.00008 m=F11: The perimeter of an average house is 4.13 metre square=F12: The minimum size visible to a human is 1e-4 m=F13: The mass of the rock is 2000 kg=F14: The average surface area of a single brick is 0.014 metre square.=F15: Given that we have square shaped rooms and a total of 20 classes, all on the same floor, implies that we have 56 walls.=F16: The density of a normal egg is 1.03 g/cc=F17: The ceiling height on an average house is 2.4 metres=F18: The weight of a normal egg is 60 g=F19: The surface area of the wall is 400 sq. feet=F20: An average of 1e+8 coins are minted each year by a facility.",
        "fact_transform": {
            "13": 0,
            "10": 1,
            "16": 2
        }
    },
    {
        "question": "How many sheets of paper could be stacked from the floor to the ceiling?",
        "program": "PROGRAM:=Q1: What is the average height of a ceiling in a room?=Q2: What is the thickness of a single sheet of paper?=A1: 108.2 in=A2: 0.003 in=Q2 -> A2|F4=Q1 -> A1|F6=P: Div(Q1, Q2)",
        "answer": "36,066",
        "context": "CONTEXT:=F1: The thickness of the connecting parts in a microchip is 0.9e-9 m=F2: The average volume of a single cherry is 4.1 cc.=F3: There are a total of 40 balls in the school, 10 of each sport.=F4: The thickness of a single sheet of paper is 0.003 inches=F5: The density of air is 1.3 kg/metre cube=F6: The average ceiling height in a room is 108.2 inches=F7: The average air present inside these balls is 0.8 atmospheres of air.=F8: The volume of an ant is 1e-8 metre cube=F9: The volume of a typical room is 60 metre cube=F10: The normal size of a cell is 1e-6 m=F11: The minimum size visible to a human is 1e-4 m=F12: The bee flies for a total of around 4 hours each day.=F13: The average thickness of a sheet of paper is 0.00008 m=F14: 417234 cherries are going to be loosely stacked.=F15: The average speed at which a bee flies is 15 miles per hour=F16: The height is 1.73 m=F17: The surface area of The Shard is 398490 sq. metre=F18: The average number of leaves on a single tree are 50000=F19: The thickness of an average atom is 0.3e-9 m=F20: The height of a Shard is 244 metres",
        "fact_transform": {
            "5": 0,
            "3": 1
        }
    },
    {
        "question": "How many metres of spaghetti would be needed if all of the children in a school had spaghetti bolognese for lunch?",
        "program": "PROGRAM:=Q1: How meters of spaghetti is there in a single meal on an average=Q2: How many children are there in the school?=Q3: How many noodle threads are in a single bowl of spaghetti?=Q4: What is the average length of noodle thread after cooking?=A1: 516=A2: 200=A3: 0.4 m=Q4 -> A3 | F4=Q3 -> A2 | F16=Q2 -> Mul (Q3, Q4)=Q1 -> A1 | F1=P: Mul (Q1, Q2)",
        "answer": "41280 m",
        "context": "CONTEXT:=F1: There are 516 students in the school.=F2: The amount of calories present in a chips bag is 1242.=F3: The weight of the person is 140 lb=F4: The average length of a noodle thread after cooking is 0.4 m=F5: An average model rocket (drone), can carry 40 lbs.=F6: The total volume of the Mount Everest is 2100000000000 cubic ft=F7: The circumference of the Earth is 1577756575 inches=F8: The average volume of a suitcase is 75000 cubic cm=F9: The size of Jupiter is 1.4e+15 km cube.=F10: The length of a nerd rope is 12 inches=F11: The limit of a planet size is 10x that of jupiter.=F12: The average thickness of a sheet of paper is 0.00008 m=F13: The average mass of a child is 25 kg.=F14: The average volume of a single gold ball is 40.672693 cubic cm=F15: The total volume of Mediterranean Sea is 439000 km cube=F16: There are approximately 200 noodle threads in a single bowl of spaghetti.=F17: The average volume of a single dump truck is 3178.32 cubic ft.=F18: The height is 1.73 m=F19: The rate at which waters flows in a typical sea is 6.4 kmph=F20: The number of calories burnt while climbing a step is 0.17 calories",
        "fact_transform": {
            "0": 0,
            "15": 1,
            "3": 2
        }
    },
    {
        "question": "How many pennies are in a typical jar?",
        "program": "PROGRAM:=Q1: What is the average volume of a jar?=Q2: What is the average volume of a penny?=A1: 0.05 cm**3=A2: 0.00036 cm**3=Q2 -> A2 | F5=Q1 -> A1 | F20=P: Div (Q1, Q2)",
        "answer": "138",
        "context": "CONTEXT:=F1: An average of 1e+8 coins are minted each year by a facility.=F2: There are around 250 coin minting facilities in the world.=F3: The height of a Shard is 244 metres=F4: There are a total of 3e+6 shipwrecks currently under water now.=F5: The average volume of a penny is 0.00036 cubic metre=F6: The radius of Earth is 4000 miles=F7: The average volume of a single cherry is 4.1 cc.=F8: The cube of the radius of earth is radius powered to 3=F9: The volume of a sphere is 4 times the radius cube.=F10: The mass of a maus tank is 170551 kg=F11: There are 1000000 numbers in a million=F12: The volume of an ant is 1e-8 metre cube=F13: The average gold present in a shipwreck is 20000 USD=F14: There are 60 minutes in an hour.=F15: The average mass of a mouse is 0.02 kg=F16: There are 24 hours in a day.=F17: 417234 cherries are going to be loosely stacked.=F18: The surface area of The Shard is 398490 sq. metre=F19: An average coin minting facility is 120 years old.=F20: The average volume of a jar is 0.05 cubic metre",
        "fact_transform": {
            "19": 0,
            "4": 1
        }
    },
    {
        "question": "What is the limit of solid planet size?",
        "program": "PROGRAM:=Q1: What is the size of jupiter?=Q2: What is the limit of a planet size?=A1: 1.4e+15 km**3=A2: 10=Q2 -> A2 | F1=Q1 -> A1 | F7=P: Mul (Q1, Q2)",
        "answer": "1.4e+16 km**3",
        "context": "CONTEXT:=F1: The limit of a planet size is 10x that of jupiter.=F2: There are 24 hours in a day.=F3: An average model rocket (drone), can carry 40 lbs.=F4: The time interval between two full moons is 30 days=F5: The thickness of an average atom is 0.3e-9 m=F6: The speed at which Earth moves is 1656 kmph=F7: The size of Jupiter is 1.4e+15 km cube.=F8: The weight of the person is 140 lb=F9: The thickness of the connecting parts in a microchip is 0.9e-9 m=F10: The rate of perspiration of leaves is 1.8 L/hour=F11: The speed of light in kmph is 1.079e+9 kmph=F12: There are 24 hours in a single day.=F13: There are 60 minutes in an hour.=F14: The height is 1.73 m=F15: There are 60 seconds in a minute.=F16: The rate of perspiration of skin is 1.5 L/hour=F17: The average thickness of a sheet of paper is 0.00008 m=F18: We gain around 2200 cal walking around equator all day, naked.=F19: There are 1000000 numbers in a million=F20: It takes around 1 second to count a number",
        "fact_transform": {
            "6": 0,
            "0": 1
        }
    },
    {
        "question": "How many trees does one need to grow in their backyard to balance the carbon footprint caused by the average usage of an Air Conditioner?",
        "program": "PROGRAM:=Q1: What is the carbon footprint caused by an AC over a year?=Q2: How many trees are to be planted for 1 ton of CO2?=A1: 1.368=A2: 6=Q2 -> A2 | F11=Q1 -> A1 | F10=P: Mul (Q1, Q2)",
        "answer": "8",
        "context": "CONTEXT:=F1: An average human inhales 6 liters of air every minute=F2: An average person's annual consumption of food is 1996 pounds=F3: Ideal wingpsan length is 83% of the length of the flying body.=F4: The volume of the oceans is 1.3e+9 km**3=F5: The volume of a golf ball is 4e-5 km**3=F6: The total canary population in the world is 100000=F7: An average farm produces around 52000 pounds of food each year.=F8: the average family size is 4=F9: The total human population is 7.2e+9=F10: The carbon footprint of an AC in a year is 1.368 tons=F11: 6 trees are to be planted for 1 ton of CO2.=F12: The average body height of a person is 170 cm.=F13: The average speed at which a bee flies is 15 miles per hour=F14: There are 24 hours in a day.=F15: Around 360 sq. yards is required to build a house with a yard.=F16: The height is 1.73 m=F17: The bee flies for a total of around 4 hours each day.=F18: 60 minutes make up an hour.=F19: Around 33 percent of canaries are flying right now.=F20: The average thickness of a sheet of paper is 0.00008 m",
        "fact_transform": {
            "9": 0,
            "10": 1
        }
    },
    {
        "question": "How many grains of sand are there on the beaches surrounding Lake Michigan?",
        "program": "PROGRAM:=Q1: How many beaches are surrounding Lake Michigan?=Q2: What is the total amount of sand present in a single beach?=Q3: What is the total area of an average beach surrounding Lake Michigan?=Q4: How many grains of sand are present in a sq. ft area?=A1: 15=A2: 1500 m**2=A3: 100000000 m**-2=Q4 -> A3 | F4=Q3 -> A2 | F13=Q2 -> Mul (Q3, Q4)=Q1 -> A1 | F1=P: Mul (Q1, Q2)",
        "answer": "2250000000000",
        "context": "CONTEXT:=F1: There are 15 beaches surrounding Lake Michigan=F2: The speed at which Earth moves is 1656 kmph=F3: The average force exerted by releasing a rubber band is 10 N=F4: There is an average of 100000000 grains of sand per meter square=F5: The limit of a planet size is 10x that of jupiter.=F6: The total volume of the ocean cover is 300000000 cubic miles=F7: The size of Jupiter is 1.4e+15 km cube.=F8: The volume of a golf ball is 4e-5 km**3=F9: The thickness of an average atom is 0.3e-9 m=F10: It takes 4000 packets to make a hot chocolate of 1 meter cube=F11: The thickness of the connecting parts in a microchip is 0.9e-9 m=F12: The average force exerted while crushing a human skull is 2300 N=F13: The average area of a beach is 15000 metre square=F14: The total volume of the earth is 259875159532 cubic miles=F15: The time interval between two full moons is 30 days=F16: There are 24 hours in a single day.=F17: The volume of the oceans is 1.3e+9 km**3=F18: The thickness of a single sheet of paper is 1e-7 km=F19: The distance from earth to moon is 384400 km=F20: The volume of Lake Ontario is 1.64e+6 m**3",
        "fact_transform": {
            "0": 0,
            "12": 1,
            "3": 2
        }
    },
    {
        "question": "How many books are sold in the United States?",
        "program": "PROGRAM:=Q1: What is the population of the US?=Q2: How many books does an average US citizen buy each year?=A1: 348200000=A2: 12=Q2 -> A2 | F4=Q1 -> A1 | F19=P: Mul (Q1, Q2)",
        "answer": "4178400000",
        "context": "CONTEXT:=F1: 6 pounds make up a single gallon of gasoline.=F2: The height is 1.73 m=F3: Around 245e+6 pickles are sold in the US every year.=F4: An average American, buys 12 books each year.=F5: The total number of trees in the world are 3e+12=F6: The average length of a pickle is around 18 cm.=F7: An average coin minting facility is 120 years old.=F8: The average weight of a person in the US is 90 kg=F9: The population of US 320000000=F10: There are around 250 coin minting facilities in the world.=F11: 74.2e+6 under 18 kids are there in the USA=F12: An average car consumes about 656 gallons per year=F13: The fat equivalent of obese people in the country is 6336000000 pounds=F14: An average US person has about 10 percent of his body weight as fat.=F15: The number of felons and convicts in the US is around 5 million.=F16: The density of average body fat is 2020 pounds per cubic meter=F17: The average number of leaves on a single tree are 50000=F18: The average thickness of a sheet of paper is 0.00008 m=F19: The population of US is 348200000=F20: An average of 1e+8 coins are minted each year by a facility.",
        "fact_transform": {
            "18": 0,
            "3": 1
        }
    },
    {
        "question": "How much paper is used at our school each week?",
        "program": "PROGRAM:=Q1: How many days are there in a week?=Q2: What is the total paper consumption in the school in a day?=Q3: How many students does a school have in total?=Q4: How many pages does a single student use in a day?=A1: 7=A2: 516=A3: 40=Q4 -> A3 | F1=Q3 -> A2 | F14=Q2 -> Mul (Q3, Q4)=Q1 -> A1 | F9=P: Mul (Q1, Q2)",
        "answer": "144480",
        "context": "CONTEXT:=F1: An average student uses 40 pages per day=F2: An average farm produces around 52000 pounds of food each year.=F3: The average speed at which a bee flies is 15 miles per hour=F4: A normal heart beats 80 times a minute.=F5: The time interval between two full moons is 30 days=F6: It takes around 1 second to count a number=F7: An average intake of freshman at a university is 550=F8: The average sleep quantity of a person is 8 hours=F9: There are 7 days in a week.=F10: The number of universities in the US is 5300=F11: The bee flies for a total of around 4 hours each day.=F12: The average thickness of a sheet of paper is 0.00008 m=F13: There are 24 hours in a day.=F14: There are 516 students in a school.=F15: The height is 1.73 m=F16: There are 60 minutes in an hour.=F17: There are 365 days in a year.=F18: The average life expectancy is 72 years=F19: There are 60 seconds in a minute.=F20: There are 1000000 numbers in a million",
        "fact_transform": {
            "8": 0,
            "13": 1,
            "0": 2
        }
    },
    {
        "question": "How much does it cost to fly drones over the planet to provide internet to the entire planet?",
        "program": "PROGRAM:=Q1: How much does it cost to fly the drone for a sq.km?=Q2: What is the total area of habitable land in the world?=A1: $100 km**-2=A2: 6070285 km**2=Q2 -> A2 | F13=Q1 -> A1 | F12=P: Mul (Q2, Q1)",
        "answer": "$607028500",
        "context": "CONTEXT:=F1: The thickness of the connecting parts in a microchip is 0.9e-9 m=F2: The weight of the person is 140 lb=F3: The force exerted by the car on the road by the virtue of gravity is 15000 N=F4: The force exerted by the wind travelling by metre per hour is 4.6e-4 N-hour/metre=F5: The number of calories burnt while climbing a step is 0.17 calories=F6: The circumference of the Earth is 1577756575 inches=F7: The amount of calories present in a chips bag is 1242.=F8: It takes an average of 50 hp while applying brakes to stop the car from moving forward.=F9: The length of a nerd rope is 12 inches=F10: The average body height of a person is 170 cm.=F11: The thickness of an average atom is 0.3e-9 m=F12: It costs about 100 USD to fly the drone for a sq.km.=F13: The total habitable land in the world is 6070285 km=F14: Ideal wingpsan length is 83% of the length of the flying body.=F15: The bee flies for a total of around 4 hours each day.=F16: An average model rocket (drone), can carry 40 lbs.=F17: The average speed at which a bee flies is 15 miles per hour=F18: The volume of a single post-it sheet is 0.007 cubic metre=F19: The volume of a single Cessna 172 is 248 cubic metre=F20: The speed of light in kmph is 1.079e+9 kmph",
        "fact_transform": {
            "11": 0,
            "12": 1
        }
    },
    {
        "question": "How much farmed land does one need to survive?",
        "program": "PROGRAM:=Q1: How much food is produced in farm land every year?=Q2: What is the food consumption of an average person every year?=A1: 52000 pounds=A2: 1996 pounds=Q2 -> A2 | F12=Q1 -> A1 | F9=P: Div (Q2, Q1)",
        "answer": "0.038",
        "context": "CONTEXT:=F1: The number of calories burnt while climbing a step is 0.17 calories=F2: The limit of a planet size is 10x that of jupiter.=F3: The rate of perspiration of leaves is 1.8 L/hour=F4: The number of universities in the US is 5300=F5: The number of plant species in the world are 391000=F6: The time interval between two full moons is 30 days=F7: The rate of perspiration of skin is 1.5 L/hour=F8: The total human population is 7.2e+9=F9: An average farm produces around 52000 pounds of food each year.=F10: the average family size is 4=F11: There are 24 hours in a day.=F12: An average person's annual consumption of food is 1996 pounds=F13: Assuming the average volume of a single animal to be 7200 cc (90x40x2)=F14: The number of animal species in the world are 7.7e+6=F15: An average intake of freshman at a university is 550=F16: Around 360 sq. yards is required to build a house with a yard.=F17: We gain around 2200 cal walking around equator all day, naked.=F18: The size of Jupiter is 1.4e+15 km cube.=F19: The average volume of a plant is 1570 cc (20cm height and 5cm radius)=F20: The amount of calories present in a chips bag is 1242.",
        "fact_transform": {
            "8": 0,
            "11": 1
        }
    },
    {
        "question": "How far, in km, does light travel during the time between two full moons?",
        "program": "PROGRAM:=Q1: What is the speed of light in km/h=Q2: What is the duration between two full moons?=Q3: What is the time interval between two full moons?=Q4: How many hours do we have in a day?=A1: 1.079e+9 km*hour**-1=A2: 30=A3: 24 hours=Q4 -> A3| F17=Q3 -> A2| F19=Q2 -> Mul (Q3, Q4)=Q1 -> A1| F20=P: Mul (Q1, Q2)",
        "answer": "8e+11 km",
        "context": "CONTEXT:=F1: The speed at which Earth moves is 1656 kmph=F2: There are 365 days in a year.=F3: The average body height of a person is 170 cm.=F4: The rate of perspiration of leaves is 1.8 L/hour=F5: The weight of the person is 140 lb=F6: The thickness of a single sheet of paper is 1e-7 km=F7: The thickness of an average atom is 0.3e-9 m=F8: The average sleep quantity of a person is 8 hours=F9: There are 24 hours in a day.=F10: The average life expectancy is 72 years=F11: The rate of perspiration of skin is 1.5 L/hour=F12: The thickness of the connecting parts in a microchip is 0.9e-9 m=F13: We gain around 2200 cal walking around equator all day, naked.=F14: The distance from earth to moon is 384400 km=F15: An average model rocket (drone), can carry 40 lbs.=F16: The limit of a planet size is 10x that of jupiter.=F17: There are 24 hours in a single day.=F18: The size of Jupiter is 1.4e+15 km cube.=F19: The time interval between two full moons is 30 days=F20: The speed of light in kmph is 1.079e+9 kmph",
        "fact_transform": {
            "19": 0,
            "18": 1,
            "16": 2
        }
    },
    {
        "question": "How long would it take to count to one million?",
        "program": "PROGRAM:=Q1: How many hours does it take to count to a million?=Q2: How many hours are there in a day?=Q3: How many minutes are there in an hour?=Q4: How many minutes does it take to count to a million?=Q5: How many seconds does it take to count to a million?=Q6: How many numbers are there in a million=Q7: What is the average time taken to count a number?=Q8: How many seconds are there in a minute?=A1: 24 hour/day=A2: 60 minute/hour=A3: 60 second/minute=A4: 1000000=A5: 1 second=Q7 -> A5 | F5=Q6 -> A4 | F9=Q5 -> Mul (Q6, Q7)=Q8 -> A3 | F16=Q4 -> Div (Q5, Q8)=Q3 -> A2 | F18=Q1 -> Div(Q4,Q3)=Q2 -> A1 | F13=P: Div(Q1, Q2)",
        "answer": "11.5 days",
        "context": "CONTEXT:=F1: The weight of the person is 140 lb=F2: The average sleep quantity of a person is 8 hours=F3: An average model rocket (drone), can carry 40 lbs.=F4: The size of Jupiter is 1.4e+15 km cube.=F5: It takes around 1 second to count a number=F6: The average life expectancy is 72 years=F7: The total land area on Earth is 501e+6 km square=F8: The average thickness of a sheet of paper is 0.00008 m=F9: There are 1000000 numbers in a million=F10: The number of calories burnt while climbing a step is 0.17 calories=F11: The population given is 1e+6=F12: There are 365 days in a year.=F13: There are 24 hours in a day.=F14: The limit of a planet size is 10x that of jupiter.=F15: Considering people to be in the midpoint of their areas (assuming to be squares), so they have to travel the length of their square to reach another person.=F16: There are 60 seconds in a minute.=F17: The time interval between two full moons is 30 days=F18: There are 60 minutes in an hour.=F19: The amount of calories present in a chips bag is 1242.=F20: The height is 1.73 m",
        "fact_transform": {
            "12": 0,
            "17": 1,
            "15": 2,
            "8": 3,
            "4": 4
        }
    },
    {
        "question": "How many sheets of paper would we need to stack to reach your height?",
        "program": "PROGRAM:=Q1: What is your height?=Q2: What is the average thickness of a sheet of paper?=A1: 1.73 m=A2: 0.00008 m=Q2 -> A2 | F7=Q1 -> A1 | F6=P: Div (Q1, Q2)",
        "answer": "21625",
        "context": "CONTEXT:=F1: The weight of the person is 140 lb=F2: There are 24 hours in a day.=F3: The size of Jupiter is 1.4e+15 km cube.=F4: The normal size of a cell is 1e-6 m=F5: Ideal wingpsan length is 83% of the length of the flying body.=F6: The height is 1.73 m=F7: The average thickness of a sheet of paper is 0.00008 m=F8: The minimum size visible to a human is 1e-4 m=F9: The limit of a planet size is 10x that of jupiter.=F10: An average model rocket (drone), can carry 40 lbs.=F11: There are 60 seconds in a minute.=F12: The length of a human and it's mass and linearly directly proportional to each other and the length of Donald Trump is 190 cm=F13: The thickness of an average atom is 0.3e-9 m=F14: There are 60 minutes in an hour.=F15: The mass of Donald Trump is 111 kg=F16: The thickness of the connecting parts in a microchip is 0.9e-9 m=F17: It takes around 1 second to count a number=F18: The mass of an average Clydesdale horse is 850 kg=F19: There are 1000000 numbers in a million=F20: The average body height of a person is 170 cm.",
        "fact_transform": {
            "5": 0,
            "6": 1
        }
    },
    {
        "question": "How many hours will you sleep in a lifetime?",
        "program": "PROGRAM:=Q1: What is the average life expectancy?=Q2: What is the average number of hours a person sleeps every year?=Q3: What is the average number of hours a person sleeps every day?=Q4: How many days are there in a year?=A1: 72 year=A2: 8 hour=A3: 365 year ** -1=Q4 -> A3 | F18=Q3 -> A2 | F7=Q2 -> Mul (Q3, Q4)=Q1 -> A1 | F5=P: Mul (Q1, Q2)",
        "answer": "210240 hours",
        "context": "CONTEXT:=F1: It takes around 1 second to count a number=F2: The bee flies for a total of around 4 hours each day.=F3: There are 24 hours in a single day.=F4: There are 1440 minutes in a day.=F5: The average life expectancy is 72 years=F6: The average speed at which a bee flies is 15 miles per hour=F7: The average sleep quantity of a person is 8 hours=F8: The speed of light in kmph is 1.079e+9 kmph=F9: The time interval between two full moons is 30 days=F10: There are 1000000 numbers in a million=F11: There are a 1000000 hours in a million hours.=F12: The speed at which Earth moves is 1656 kmph=F13: The limit of a planet size is 10x that of jupiter.=F14: There are 60 seconds in a minute.=F15: The size of Jupiter is 1.4e+15 km cube.=F16: There are 60 minutes in an hour.=F17: There are 1000000 seconds in a million seconds=F18: There are 365 days in a year.=F19: The duration of my favorite song is 3 minutes.=F20: There are 24 hours in a day.",
        "fact_transform": {
            "4": 0,
            "6": 1,
            "17": 2
        }
    },
    {
        "question": "One suggestion for putting satellites into orbit cheaply without using rockets is to build a tower 300 km high containing an elevator. One would put the payload in the elevator, lift it to the top, and just step out into orbit. Ignoring other problems (such as structural strain on the tower), estimate the weight of such a tower if its base were the size of Washington DC and it were made of steel.",
        "program": "PROGRAM:=Q1: What is the total volume of the tower?=Q2: What is the density of steel?=Q3: What is the surface area of Washington DC?=Q4: What is the height of the tower?=A1: 8e+9 kg/km**3=A2: 177 km**2=A3: 300 km=Q4 -> A3 | F4=Q3 -> A2 | F18=Q1 -> Mul (Q3, Q4)=Q2 -> A1 | F5=P: Mul (Q1, Q2)",
        "answer": "4.2e+14 kg",
        "context": "CONTEXT:=F1: The weight of the person is 140 lb=F2: The total raw materials cost to make a sailing frigate is 5e+6 USD (assumption)=F3: The mass of Donald Trump is 111 kg=F4: The height of the tower is 300 km=F5: The density of steel is 8e+9 kg/km**3=F6: Ideal wingpsan length is 83% of the length of the flying body.=F7: The amount of calories present in a chips bag is 1242.=F8: The number of calories burnt while climbing a step is 0.17 calories=F9: The total habitable land in the world is 6070285 km=F10: An average model rocket (drone), can carry 40 lbs.=F11: It takes an average of 50 hp while applying brakes to stop the car from moving forward.=F12: The average thickness of a sheet of paper is 0.00008 m=F13: The mass of an average Clydesdale horse is 850 kg=F14: The length of a nerd rope is 12 inches=F15: The length of a human and it's mass and linearly directly proportional to each other and the length of Donald Trump is 190 cm=F16: It costs about 100 USD to fly the drone for a sq.km.=F17: The average body height of a person is 170 cm.=F18: The size of Washington DC is 177 km**2=F19: The total manufacturing cost to build a sailing frigate is 10e+5 USD (assumption)=F20: The height is 1.73 m",
        "fact_transform": {
            "4": 0,
            "17": 1,
            "3": 2
        }
    },
    {
        "question": "If a 6 foot diameter pipe were built to contain all the ocean water, how many miles long would the pipe have to be?",
        "program": "PROGRAM:=Q1: What is the total volume of water in the oceans?=Q2: What is the surface area of the pipe?=Q3: What is the diameter of the pipe?=Q4: What is the relationship between diameter and surface area of the pipe?=Q5: What is the square of the diameter?=A1: 321000000 miles**3=A2: 0.001 miles=A3: 0.75=Q3 -> A2 | F9=Q5 -> Pow (Q3, 2)=Q4 -> A3 | F20=Q2 -> Mul (Q5, Q4)=Q1 -> A1 | F17=P: Div(Q1, Q2)",
        "answer": "428000000000000 miles",
        "context": "CONTEXT:=F1: The average temperature of a tropical area is 26 degree celsius.=F2: The volume of a golf ball is 4e-5 km**3=F3: The average surface area in earth's oceans is 130434782 squaremiles=F4: The length of a human and it's mass and linearly directly proportional to each other and the length of Donald Trump is 190 cm=F5: The total volume of earth's oceans is 300000000 cubic miles=F6: An average temperature of Arizona is 35 degree celsius=F7: The total volume of the ocean cover is 300000000 cubic miles=F8: An average model rocket (drone), can carry 40 lbs.=F9: The diameter of the pipe is 0.001 miles=F10: 1 mL heated with 4.1 J can change the temperature by 1 degree celsius.=F11: The mass of a maus tank is 170551 kg=F12: The total water present on earth is 1.38e+9 km**3=F13: The mass of an average Clydesdale horse is 850 kg=F14: The average mass of a mouse is 0.02 kg=F15: The total water present in an average human is 3.7e-11 km**3=F16: The volume of the oceans is 1.3e+9 km**3=F17: The total volume of water in the oceans is 321000000 cubic miles=F18: The mass of Donald Trump is 111 kg=F19: The total volume of the earth is 259875159532 cubic miles=F20: The surface area of the pipe is 0.75 times the diameter square.",
        "fact_transform": {
            "16": 0,
            "8": 1,
            "19": 2
        }
    },
    {
        "question": "What fraction of volume does one water molecule occupy in a cup of water?",
        "program": "PROGRAM:=Q1: What is the volume of one molecule of water?=Q2: What is the volume of a cup of water?=A1: 3e-23 cm**3=A2: 250 cm**3=Q2 -> A2 | F10=Q1 -> A1 | F6=P: Div(Q1, Q2)",
        "answer": "1.20E-25",
        "context": "CONTEXT:=F1: The radius of Earth is 4000 miles=F2: 1 cubic centimeter makes up 1 cc=F3: 60 minutes make up an hour.=F4: Each significantly big cloud, contains about 192000 km**3 of water in it.=F5: There are around 1000 significantly big clouds in the sky.=F6: The volume of one molecule of water is 3e-23 cc=F7: The total volume of the earth is 259875159532 cubic miles=F8: The total water present on earth is 1.38e+9 km**3=F9: An average human inhales 6 liters of air every minute=F10: The volume of cup of water is 250 cc=F11: The total water present in an average human is 3.7e-11 km**3=F12: The volume of a single red blood cell is 87e-12 cc=F13: The volume of a sphere is 4 times the radius cube.=F14: The average volume of a single cherry is 4.1 cc.=F15: The total volume of the ocean cover is 300000000 cubic miles=F16: The volume of a single golf ball is 0.01 gallon=F17: 417234 cherries are going to be loosely stacked.=F18: The volume of the water cooler jug given is 5 gallon.=F19: There are 24 hours in a day.=F20: The cube of the radius of earth is radius powered to 3",
        "fact_transform": {
            "5": 0,
            "9": 1
        }
    },
    {
        "question": "How many bricks are there the whole school?",
        "program": "PROGRAM:=Q4: How many walls are there in a school?=Q3: How many bricks are there in one wall of the classroom?=Q1: What is the surface total area of a wall?=Q2: What is the surface area of a single brick?=A1: 400=A2: 4=A3: 56=Q2 -> A2 | F10=Q1 -> A1 | F11=Q3 -> Div (Q1, Q2)=Q4 -> A3 | F7=P: Mul (Q3, Q4)",
        "answer": "5600",
        "context": "CONTEXT:=F1: There are a total of 40 balls in the school, 10 of each sport.=F2: The perimeter of an average house is 4.13 metre square=F3: The minimum size visible to a human is 1e-4 m=F4: The weight of a normal egg is 60 g=F5: The volume of a typical room is 60 metre cube=F6: The density of air is 1.3 kg/metre cube=F7: Given that we have square shaped rooms and a total of 20 classes, all on the same floor, implies that we have 56 walls.=F8: The density of a normal egg is 1.03 g/cc=F9: The average thickness of a sheet of paper is 0.00008 m=F10: The surface area of a brick is 4 sq. feet=F11: The surface area of the wall is 400 sq. feet=F12: The normal size of a cell is 1e-6 m=F13: The total number of students attending school in an average US city is 210843=F14: The height is 1.73 m=F15: An average American, buys 12 books each year.=F16: The ceiling height on an average house is 2.4 metres=F17: The total number of school aged kids in an average US city is 242349=F18: The average air present inside these balls is 0.8 atmospheres of air.=F19: The density of gold is 19.3g/cc=F20: The average surface area of a single brick is 0.014 metre square.",
        "fact_transform": {
            "10": 0,
            "9": 1,
            "6": 2
        }
    },
    {
        "question": "What is the total mass, kg, of the oceans?",
        "program": "PROGRAM:=Q1: What is the density of a water molecule?=Q2: What is the total volume of water present in the oceans?=A1: 4.156e+12 kg*mile**-3=A2: 320000000 mile**3=Q2 -> A2 | F15=Q1 -> A1 | F13=P: Mul(Q1, Q2)",
        "answer": "133e+19 kg",
        "context": "CONTEXT:=F1: The total volume of the ocean cover is 300000000 cubic miles=F2: The total water present in an average human is 3.7e-11 km**3=F3: The total volume of water in the oceans is 321000000 cubic miles=F4: The diameter of the pipe is 0.001 miles=F5: There are a total of 3e+6 shipwrecks currently under water now.=F6: The limit of a planet size is 10x that of jupiter.=F7: The average fish consumption of a single person is 16.5 kgs per year (according to a survey in 2005)=F8: The surface area of the pipe is 0.75 times the diameter square.=F9: The volume of a golf ball is 4e-5 km**3=F10: The average gold present in a shipwreck is 20000 USD=F11: The total volume of earth's oceans is 300000000 cubic miles=F12: The total volume of the earth is 259875159532 cubic miles=F13: The density of a single water molecule is 4.156e+12 kg/cubic mile=F14: The average surface area in earth's oceans is 130434782 squaremiles=F15: The total volume of water molecules is 32000000 cubic miles=F16: The total water present on earth is 1.38e+9 km**3=F17: The size of Jupiter is 1.4e+15 km cube.=F18: The volume of the oceans is 1.3e+9 km**3=F19: The total world population is 7.2e+9=F20: The volume of a sphere is 4 times the radius cube.",
        "fact_transform": {
            "12": 0,
            "14": 1
        }
    },
    {
        "question": "How many molecules are in a TiO2 pigment particle?",
        "program": "PROGRAM:=Q1: What is the volume occupied by a single TiO2 pigment?=Q2: What is the volume occupied by a single molecule?=A1: 0.000001 m**3=A2: 3e-23 m**3=Q2 -> A2 | F19=Q1 -> A1 | F10=P: Div(Q1, Q2)",
        "answer": "3.00E+16",
        "context": "CONTEXT:=F1: The rate of perspiration of leaves is 1.8 L/hour=F2: The average mass of a mouse is 0.02 kg=F3: The distance from earth to moon is 384400 km=F4: The rate of perspiration of skin is 1.5 L/hour=F5: The thickness of a single sheet of paper is 1e-7 km=F6: The thickness of the connecting parts in a microchip is 0.9e-9 m=F7: The speed of light in kmph is 1.079e+9 kmph=F8: The total number of people associated with CoronaVirus right now are 1.58e+6=F9: The speed at which Earth moves is 1656 kmph=F10: The volume occupied by a single TiO2 pigment is 0.000001 metre cube=F11: The normal size of a cell is 1e-6 m=F12: We gain around 2200 cal walking around equator all day, naked.=F13: The time interval between two full moons is 30 days=F14: The size of Jupiter is 1.4e+15 km cube.=F15: The mass of the corona virus in a patient's body is 50e-6 grams=F16: There are 24 hours in a single day.=F17: The limit of a planet size is 10x that of jupiter.=F18: The mass of a maus tank is 170551 kg=F19: The volume occupied by a single molecule is 3e-23 metre cube=F20: The thickness of an average atom is 0.3e-9 m",
        "fact_transform": {
            "9": 0,
            "18": 1
        }
    },
    {
        "question": "If you took the thread from all the uniform shirts of the Notre Dame football team and laid them end-to-end, how many times could you wind it around the football stadium at Notre Dame?",
        "program": "PROGRAM:=Q1: What is the perimeter of Notre-Dame?=Q2: What is the total length of the thread from the team's jersey?=Q3: How many players are there in the team?=Q4: How much thread goes into making one single football t shirt?=A1: 0.8 km=A2: 11=A3: 0.1 km=Q4 -> A3 | F4=Q3 -> A2 | F15=Q2 -> Mul (Q3, Q4)=Q1 -> A1 | F1=P: Div (Q2, Q1)",
        "answer": "1.375",
        "context": "CONTEXT:=F1: The perimeter of Notre Dame stadium is 0.8 km=F2: The average volume of a single gold ball is 40.672693 cubic cm=F3: The force exerted by the car on the road by the virtue of gravity is 15000 N=F4: Roughly, around 100 metres of thread goes into making a t shirt for football=F5: The volume of a horse is 500000 cc=F6: The time interval between two full moons is 30 days=F7: Ideal wingpsan length is 83% of the length of the flying body.=F8: The volume of a golf ball is 4e-5 km**3=F9: The volume of the oceans is 1.3e+9 km**3=F10: The average thickness of a sheet of paper is 0.00008 m=F11: The volume of a single post-it sheet is 0.007 cubic metre=F12: The force exerted by the wind travelling by metre per hour is 4.6e-4 N-hour/metre=F13: The volume of glue stick is 100 cc=F14: The height is 1.73 m=F15: There are a total of 11 players in the team.=F16: The length of a nerd rope is 12 inches=F17: The average body height of a person is 170 cm.=F18: The average volume of a suitcase is 75000 cubic cm=F19: The volume of a single Cessna 172 is 248 cubic metre=F20: The circumference of the Earth is 1577756575 inches",
        "fact_transform": {
            "0": 0,
            "14": 1,
            "3": 2
        }
    },
    {
        "question": "If you played your favorite song continuously for a whole year, how many times would it play?",
        "program": "PROGRAM:=Q1: What is the duration of your favorite song?=Q2: What is the duration of a year in minutes?=Q3: How many minutes are there in a day?=Q4: How many days are there in a year?=A1: 3=A2: 365=A3: 1440=Q4 -> A3 | F6=Q3 -> A2 | F11=Q2 -> Mul (Q3, Q4)=Q1 -> A1 | F20=P: Div (Q2, Q1)",
        "answer": "175200",
        "context": "CONTEXT:=F1: The time interval between two full moons is 30 days=F2: The size of Jupiter is 1.4e+15 km cube.=F3: There are 60 seconds in a minute.=F4: The average thickness of a sheet of paper is 0.00008 m=F5: The thickness of an average atom is 0.3e-9 m=F6: There are 1440 minutes in a day.=F7: The volume of the oceans is 1.3e+9 km**3=F8: The average sleep quantity of a person is 8 hours=F9: There are 24 hours in a day.=F10: It takes around 1 second to count a number=F11: There are 365 days in a year.=F12: There are 60 minutes in an hour.=F13: The average force exerted while crushing a human skull is 2300 N=F14: The height is 1.73 m=F15: The average force exerted by releasing a rubber band is 10 N=F16: The limit of a planet size is 10x that of jupiter.=F17: The thickness of the connecting parts in a microchip is 0.9e-9 m=F18: The average life expectancy is 72 years=F19: There are 1000000 numbers in a million=F20: The duration of my favorite song is 3 minutes.",
        "fact_transform": {
            "19": 0,
            "10": 1,
            "5": 2
        }
    },
    {
        "question": "What is the density, g/cc, of the gold atom nucleus?",
        "program": "PROGRAM:=Q1: What is the number of atoms present inside's gold's nucleus?=Q2: What is the density of the gold atom?=A1: 197=A2: 19.32 g*cm**-3=Q2 -> A2 | F15=Q1 -> A1 | F8=P: Mul (Q1, Q2)",
        "answer": "3806 g*cm**-3",
        "context": "CONTEXT:=F1: The limit of a planet size is 10x that of jupiter.=F2: The thickness of an average atom is 0.3e-9 m=F3: The acceleration due to gravity acting on the rock is 10m/s**2=F4: The density of gold is 19.3g/cc=F5: The density of a normal egg is 1.03 g/cc=F6: The perimeter of an average house is 4.13 metre square=F7: The average force exerted by releasing a rubber band is 10 N=F8: The number of atoms present in gold's nucleus is 197=F9: There are a total of 3e+6 shipwrecks currently under water now.=F10: The height at which the rock is falling from is 100m.=F11: The mass of the rock is 2000 kg=F12: The weight of a normal egg is 60 g=F13: The average force exerted while crushing a human skull is 2300 N=F14: The size of Jupiter is 1.4e+15 km cube.=F15: The density of gold atom is 19.32 g/cc=F16: The average surface area of a single brick is 0.014 metre square.=F17: The thickness of the connecting parts in a microchip is 0.9e-9 m=F18: The ceiling height on an average house is 2.4 metres=F19: The average gold present in a shipwreck is 20000 USD=F20: The mass of sun is 2e+33 gm",
        "fact_transform": {
            "7": 0,
            "14": 1
        }
    },
    {
        "question": "If all the water vapour and clouds in the atmosphere precipitated or condensed in one place, how large of a body of water would it form?",
        "program": "PROGRAM:=Q1: How many significantly big clouds are there in the sky?=Q2: What is the water content in these significantly big clouds?=A1: 1000=A2: 1.92e+5 km**3=Q2 -> A2 | F19=Q1 -> A1 | F10=P: Mul (Q1, Q2)",
        "answer": "1.92e+8 km**3",
        "context": "CONTEXT:=F1: The average thickness of a sheet of paper is 0.00008 m=F2: The volume of the oceans is 1.3e+9 km**3=F3: The volume of one molecule of water is 3e-23 cc=F4: An average human inhales 6 liters of air every minute=F5: The volume of a golf ball is 4e-5 km**3=F6: The total water present in an average human is 3.7e-11 km**3=F7: 1 mL heated with 4.1 J can change the temperature by 1 degree celsius.=F8: The size of Jupiter is 1.4e+15 km cube.=F9: The total volume of the earth is 259875159532 cubic miles=F10: There are around 1000 significantly big clouds in the sky.=F11: The average temperature of a tropical area is 26 degree celsius.=F12: The limit of a planet size is 10x that of jupiter.=F13: There are 24 hours in a day.=F14: 60 minutes make up an hour.=F15: The total water present on earth is 1.38e+9 km**3=F16: The height is 1.73 m=F17: The total volume of the ocean cover is 300000000 cubic miles=F18: An average temperature of Arizona is 35 degree celsius=F19: Each significantly big cloud, contains about 192000 km**3 of water in it.=F20: The volume of cup of water is 250 cc",
        "fact_transform": {
            "9": 0,
            "18": 1
        }
    },
    {
        "question": "If our skin was made of the same material as plant leaves and we walked around all day naked at the equator, how many calories would we gain?",
        "program": "PROGRAM:=Q1: How many calories are lost walking around equator all day, naked?=Q2: What is the ratio of the rate of perspiration of leaves to that of skin?=Q3: What is the rate of perspiration of leaves?=Q4: What is the rate of perspiration of skin?=A1: 2200 calories=A2: 1.8L*hours**-1=A3: 1.5 L*hours**-1=Q4 -> A3 | F5=Q3 -> A2 | F19=Q2 -> Div (Q3, Q4)=Q1 -> A1 | F11=P: Mul (Q1, Q2)",
        "answer": "2640 cal",
        "context": "CONTEXT:=F1: The energy produced by a leaf during photosynthesis daily is 200 cal.=F2: The time interval between two full moons is 30 days=F3: The amount of calories present in a chips bag is 1242.=F4: The height of an average human is 170 cm=F5: The rate of perspiration of skin is 1.5 L/hour=F6: The number of calories burnt while climbing a step is 0.17 calories=F7: The thickness of an average atom is 0.3e-9 m=F8: There are 24 hours in a single day.=F9: The volume of an average human is 62000 cc=F10: The surface area of a leaf is 0.0075 metre square (one side)=F11: We gain around 2200 cal walking around equator all day, naked.=F12: The speed at which Earth moves is 1656 kmph=F13: There are 24 hours in a day.=F14: The surface area of a human body is 0.85 metre square (one side)=F15: An average farm produces around 52000 pounds of food each year.=F16: An average person's annual consumption of food is 1996 pounds=F17: The size of Jupiter is 1.4e+15 km cube.=F18: The limit of a planet size is 10x that of jupiter.=F19: The rate of perspiration of leaves is 1.8 L/hour=F20: The thickness of the connecting parts in a microchip is 0.9e-9 m",
        "fact_transform": {
            "10": 0,
            "18": 1,
            "4": 2
        }
    },
    {
        "question": "How many particles of flour are in a gram?",
        "program": "PROGRAM:=Q1: What is the weight in grams that is being referenced?=Q2: What is the weight of one particle of flour?=A1: 1 g=A2: 0.0001 g=Q2 -> A2 | F16=Q1 -> A1 | F6=P: Div (Q1, Q2)",
        "answer": "10000",
        "context": "CONTEXT:=F1: There are 261 working days in a year.=F2: The thickness of the connecting parts in a microchip is 0.9e-9 m=F3: The thickness of an average atom is 0.3e-9 m=F4: The ceiling height on an average house is 2.4 metres=F5: There are an average of 450 toilet paper rolls as back-up stock in a school.=F6: The weight in grams that is being referenced is 1.=F7: The surface area of The Shard is 398490 sq. metre=F8: The height of a Shard is 244 metres=F9: An average coin minting facility is 120 years old.=F10: The average volume of a jar is 0.05 cubic metre=F11: The average volume of a penny is 0.00036 cubic metre=F12: The perimeter of an average house is 4.13 metre square=F13: An average person's annual consumption of food is 1996 pounds=F14: An average of 1e+8 coins are minted each year by a facility.=F15: The average surface area of a single brick is 0.014 metre square.=F16: The mass of a single particle of flour is 0.0001 g (assumption, since no related data was available.)=F17: Around 7000 softballs are produced daily. (Assumption)=F18: There are around 250 coin minting facilities in the world.=F19: The volume of an ant is 1e-8 metre cube=F20: An average farm produces around 52000 pounds of food each year.",
        "fact_transform": {
            "5": 0,
            "15": 1
        }
    },
    {
        "question": "How many golf balls put into the worlds oceans would it take to submerge all of the land on earth from the displaced water?",
        "program": "PROGRAM:=Q1: What is the volume of the oceans?=Q2: What is the volume of a golf ball?=A1: 1.3e+9 km**3=A2: 4e-5 km**3=Q2 -> A2 | F2=Q1 -> A1 | F8=P: Div (Q1, Q2)",
        "answer": "3.20E+13",
        "context": "CONTEXT:=F1: The circumference of the Earth is 1577756575 inches=F2: The volume of a golf ball is 4e-5 km**3=F3: The limit of a planet size is 10x that of jupiter.=F4: The total volume of the earth is 259875159532 cubic miles=F5: The length of a nerd rope is 12 inches=F6: The force exerted by the car on the road by the virtue of gravity is 15000 N=F7: The average temperature of a tropical area is 26 degree celsius.=F8: The volume of the oceans is 1.3e+9 km**3=F9: The volume of the water cooler jug given is 5 gallon.=F10: The volume of a single golf ball is 0.01 gallon=F11: The rate of perspiration of skin is 1.5 L/hour=F12: The force exerted by the wind travelling by metre per hour is 4.6e-4 N-hour/metre=F13: The weight of the person is 140 lb=F14: The volume of a single water drop is 18e-10 cubic metre=F15: The total volume of the ocean cover is 300000000 cubic miles=F16: 1 mL heated with 4.1 J can change the temperature by 1 degree celsius.=F17: An average temperature of Arizona is 35 degree celsius=F18: An average model rocket (drone), can carry 40 lbs.=F19: The size of Jupiter is 1.4e+15 km cube.=F20: The volume of the swimming pool is 2500 cubic metre",
        "fact_transform": {
            "7": 0,
            "1": 1
        }
    },
    {
        "question": "How many people would it take to surround our school if they held hands?",
        "program": "PROGRAM:=Q1: What is the perimeter of the school?=Q2: What is the length between both hands when holding two different people on both sides?=A1: 300m=A2: 0.6m=Q2 -> A2 | F12=Q1 -> A1 | F20=P: Div(Q1, Q2)",
        "answer": "500",
        "context": "CONTEXT:=F1: There are 1000000 numbers in a million=F2: The total land area on Earth is 501e+6 km square=F3: The total human population is 7.2e+9=F4: The average life expectancy is 72 years.=F5: The height is 1.73 m=F6: The circumference of the Earth is 1577756575 inches=F7: Considering people to be in the midpoint of their areas (assuming to be squares), so they have to travel the length of their square to reach another person.=F8: There are 24 hours in a day.=F9: The population given is 1e+6=F10: It takes around 1 second to count a number=F11: There are 60 minutes in an hour.=F12: The average length between both hands when holding two different people on both sides is 0.6m=F13: On an average, we meet 140 new people every year.=F14: Around 360 sq. yards is required to build a house with a yard.=F15: There are a total of 40 balls in the school, 10 of each sport.=F16: The average thickness of a sheet of paper is 0.00008 m=F17: the average family size is 4=F18: The length of a nerd rope is 12 inches=F19: There are 60 seconds in a minute.=F20: The perimeter of a school is 300m",
        "fact_transform": {
            "19": 0,
            "11": 1
        }
    },
    {
        "question": "If there were no traffic, how quickly could a race car travel from Washington D.C. to Los Angeles?",
        "program": "PROGRAM:=Q1: What is the distance between Washington DC and Los Angeles?=Q2: What is the average speed of a race car?=A1: 2668 miles=A2: 200 miles/hour=Q2 -> A2 | F13=Q1 -> A1 | F7=P: Div (Q1, Q2)",
        "answer": "11.6 hours",
        "context": "CONTEXT:=F1: The average thickness of a sheet of paper is 0.00008 m=F2: The average body height of a person is 170 cm.=F3: The average temperature of a tropical area is 26 degree celsius.=F4: It takes an average of 50 hp while applying brakes to stop the car from moving forward.=F5: The mass of an average Clydesdale horse is 850 kg=F6: Ideal wingpsan length is 83% of the length of the flying body.=F7: The distance between Washington DC and Los Angeles is 2668 miles=F8: The force exerted by the wind travelling by metre per hour is 4.6e-4 N-hour/metre=F9: The limit of a planet size is 10x that of jupiter.=F10: The force exerted by the car on the road by the virtue of gravity is 15000 N=F11: The length of a human and it's mass and linearly directly proportional to each other and the length of Donald Trump is 190 cm=F12: The mass of Donald Trump is 111 kg=F13: The average speed at which a bee flies is 15 miles per hour=F14: 1 mL heated with 4.1 J can change the temperature by 1 degree celsius.=F15: The height is 1.73 m=F16: An average temperature of Arizona is 35 degree celsius=F17: The speed of light in kmph is 1.079e+9 kmph=F18: The average force exerted by releasing a rubber band is 10 N=F19: The size of Jupiter is 1.4e+15 km cube.=F20: The average force exerted while crushing a human skull is 2300 N",
        "fact_transform": {
            "6": 0,
            "12": 1
        }
    },
    {
        "question": "How many post its would it take to completely cover a cessna 172?",
        "program": "PROGRAM:=Q1: What is the volume of a single Cessna 172?=Q2: What is the volume of a single post-it sheet?=A1: 248 m**3=A2: 0.007 m**3=Q2 -> A2 | F11=Q1 -> A1 | F10=P: Div (Q1, Q2)",
        "answer": "35428",
        "context": "CONTEXT:=F1: The circumference of the Earth is 1577756575 inches=F2: The average body height of a person is 170 cm.=F3: The bee flies for a total of around 4 hours each day.=F4: The thickness of the connecting parts in a microchip is 0.9e-9 m=F5: An average model rocket (drone), can carry 40 lbs.=F6: The weight of the person is 140 lb=F7: The number of calories burnt while climbing a step is 0.17 calories=F8: The amount of calories present in a chips bag is 1242.=F9: The length of a nerd rope is 12 inches=F10: The volume of a single Cessna 172 is 248 cubic metre=F11: The volume of a single post-it sheet is 0.007 cubic metre=F12: The average force exerted by releasing a rubber band is 10 N=F13: The force exerted by the car on the road by the virtue of gravity is 15000 N=F14: Ideal wingpsan length is 83% of the length of the flying body.=F15: The force exerted by the wind travelling by metre per hour is 4.6e-4 N-hour/metre=F16: The average thickness of a sheet of paper is 0.00008 m=F17: The thickness of an average atom is 0.3e-9 m=F18: The height is 1.73 m=F19: The average force exerted while crushing a human skull is 2300 N=F20: The average speed at which a bee flies is 15 miles per hour",
        "fact_transform": {
            "9": 0,
            "10": 1
        }
    },
    {
        "question": "What is the density, g/cc, of the Sun?",
        "program": "PROGRAM:=Q1: What is the mass of the sun?=Q2: What is the volume of the sun?=A1: 2e+33 g=A2: 1.4e+24 cm**3=Q2 -> A2 | F4=Q1 -> A1 | F17=P: Div(Q1, Q2)",
        "answer": "1.42e+9 g*cm**-3",
        "context": "CONTEXT:=F1: The limit of a planet size is 10x that of jupiter.=F2: The height at which the rock is falling from is 100m.=F3: The volume of a sphere is 4 times the radius cube.=F4: The density of sun is 1.4e+24 cc=F5: The number of atoms present in gold's nucleus is 197=F6: The speed of light in kmph is 1.079e+9 kmph=F7: The cube of the radius of earth is radius powered to 3=F8: The mass of the rock is 2000 kg=F9: An average human inhales 6 liters of air every minute=F10: The density of gold is 19.3g/cc=F11: There are 24 hours in a day.=F12: There are 24 hours in a single day.=F13: The density of gold atom is 19.32 g/cc=F14: The radius of Earth is 4000 miles=F15: The time interval between two full moons is 30 days=F16: The density of a normal egg is 1.03 g/cc=F17: The mass of sun is 2e+33 gm=F18: The acceleration due to gravity acting on the rock is 10m/s**2=F19: The size of Jupiter is 1.4e+15 km cube.=F20: The weight of a normal egg is 60 g",
        "fact_transform": {
            "16": 0,
            "3": 1
        }
    },
    {
        "question": "How many hours from one full moon to the next?",
        "program": "PROGRAM:=Q1: What is the time interval between two successive full moons?=Q2: What is the number of hours in a day?=A1: 30=A2: 24 hours=Q2 -> A2 | F16=Q1 -> A1 | F7=P: Mul (Q1, Q2)",
        "answer": "720 hours",
        "context": "CONTEXT:=F1: The speed of light in kmph is 1.079e+9 kmph=F2: The height is 1.73 m=F3: The average thickness of a sheet of paper is 0.00008 m=F4: The distance from earth to moon is 384400 km=F5: There are 60 minutes in an hour.=F6: It takes around 1 second to count a number=F7: The time interval between two full moons is 30 days=F8: The bee flies for a total of around 4 hours each day.=F9: There are 365 days in a year.=F10: The size of Jupiter is 1.4e+15 km cube.=F11: The average speed at which a bee flies is 15 miles per hour=F12: There are 24 hours in a single day.=F13: The average sleep quantity of a person is 8 hours=F14: The speed at which Earth moves is 1656 kmph=F15: The thickness of a single sheet of paper is 1e-7 km=F16: There are 24 hours in a day.=F17: The average life expectancy is 72 years=F18: There are 1000000 numbers in a million=F19: The limit of a planet size is 10x that of jupiter.=F20: There are 60 seconds in a minute.",
        "fact_transform": {
            "6": 0,
            "15": 1
        }
    },
    {
        "question": "What percentage of plants are used for drugs?",
        "program": "PROGRAM:=Q1: How many medicinal plants are there in the world?=Q2: How many total plants are there in the world?=Q3: What is the fraction of plants that are medicinal?=A1: 50000=A2: 390900=Q2 -> A2 | F6=Q1 -> A1 | F11=Q3 -> Div (Q1, Q2)=P: Mul (Q3, 100)",
        "answer": "12.7 %",
        "context": "CONTEXT:=F1: An average farm produces around 52000 pounds of food each year.=F2: The fat equivalent of obese people in the country is 6336000000 pounds=F3: An average person's annual consumption of food is 1996 pounds=F4: The total number of trees in the world are 3e+12=F5: The volume occupied by a single TiO2 pigment is 0.000001 metre cube=F6: The total number of plants in the world are 390900.=F7: The volume of an ant is 1e-8 metre cube=F8: An average car consumes about 656 gallons per year=F9: 6 pounds make up a single gallon of gasoline.=F10: The height of a Shard is 244 metres=F11: The total medicinal plants in the world are 50000=F12: The weight of the person is 140 lb=F13: An average model rocket (drone), can carry 40 lbs.=F14: The average speed at which a bee flies is 15 miles per hour=F15: The normal size of a cell is 1e-6 m=F16: The average number of leaves on a single tree are 50000=F17: The surface area of The Shard is 398490 sq. metre=F18: The bee flies for a total of around 4 hours each day.=F19: The volume occupied by a single molecule is 3e-23 metre cube=F20: The minimum size visible to a human is 1e-4 m",
        "fact_transform": {
            "10": 0,
            "5": 1
        }
    },
    {
        "question": "How many songs contain the lyrics \"baby\"?",
        "program": "PROGRAM:=Q1: How many songs have been released until now?=Q2: What percent of songs contain the term - baby?=A1: 150e+6=A2: 0.0017=Q2 -> A2 | F3=Q1 -> A1 | F5=P: Mul (Q1, Q2)",
        "answer": "255000",
        "context": "CONTEXT:=F1: An average coin minting facility is 120 years old.=F2: The average mass of an Elephant is 4200 kg.=F3: Around 0.17% of songs contain the term baby?=F4: The average force exerted by releasing a rubber band is 10 N=F5: A total of 150e+6 songs have been released till now.=F6: The total human population is 7.2e+9=F7: Around 7000 softballs are produced daily. (Assumption)=F8: The volume of a single post-it sheet is 0.007 cubic metre=F9: The average mass of a child is 25 kg.=F10: There are around 250 coin minting facilities in the world.=F11: The number of universities in the US is 5300=F12: Around 360 sq. yards is required to build a house with a yard.=F13: The volume of a single Cessna 172 is 248 cubic metre=F14: There are 261 working days in a year.=F15: An average intake of freshman at a university is 550=F16: The average volume of a single cherry is 4.1 cc.=F17: The average force exerted while crushing a human skull is 2300 N=F18: An average of 1e+8 coins are minted each year by a facility.=F19: the average family size is 4=F20: 417234 cherries are going to be loosely stacked.",
        "fact_transform": {
            "4": 0,
            "2": 1
        }
    },
    {
        "question": "How many leaves are there in the world?",
        "program": "PROGRAM:=Q1: How many trees are there in the world?=Q2: What is the average number of leaves on a single tree?=A1: 3e+12=A2: 50000=Q2 -> A2 | F7=Q1 -> A1 | F12=P: Mul (Q1, Q2)",
        "answer": "1.50E+17",
        "context": "CONTEXT:=F1: The average speed at which a bee flies is 15 miles per hour=F2: The bee flies for a total of around 4 hours each day.=F3: The volume of an ant is 1e-8 metre cube=F4: An average coin minting facility is 120 years old.=F5: The height of a Shard is 244 metres=F6: The total number of plants in the world are 390900.=F7: The average number of leaves on a single tree are 50000=F8: The total canary population in the world is 100000=F9: The minimum size visible to a human is 1e-4 m=F10: On an average, we meet 140 new people every year.=F11: The total medicinal plants in the world are 50000=F12: The total number of trees in the world are 3e+12=F13: There are around 250 coin minting facilities in the world.=F14: An average of 1e+8 coins are minted each year by a facility.=F15: The average life expectancy is 72 years.=F16: Around 33 percent of canaries are flying right now.=F17: The total world population is 7.2e+9=F18: The normal size of a cell is 1e-6 m=F19: The average fish consumption of a single person is 16.5 kgs per year (according to a survey in 2005)=F20: The surface area of The Shard is 398490 sq. metre",
        "fact_transform": {
            "11": 0,
            "6": 1
        }
    },
    {
        "question": "How many gallons of water move down the Mississippi River in one day?",
        "program": "PROGRAM:=Q1: What is the average flow rate of water?=Q2: What is the duration of a day in seconds?=A1: 1.6e+6 gallons*s**-1=A2: 86400 s=Q2 -> A2|F14=Q1 -> A1|F18=P: Mul(Q1, Q2)",
        "answer": "1.3e+11 gallons",
        "context": "CONTEXT:=F1: The total water present on earth is 1.38e+9 km**3=F2: The diameter of the pipe is 0.001 miles=F3: The volume of a golf ball is 4e-5 km**3=F4: The volume of a sphere is 4 times the radius cube.=F5: The volume of one molecule of water is 3e-23 cc=F6: The volume of cup of water is 250 cc=F7: The average fish consumption of a single person is 16.5 kgs per year (according to a survey in 2005)=F8: The radius of Earth is 4000 miles=F9: The total volume of water in the oceans is 321000000 cubic miles=F10: The cube of the radius of earth is radius powered to 3=F11: The total volume of the ocean cover is 300000000 cubic miles=F12: The volume of the oceans is 1.3e+9 km**3=F13: The total water present in an average human is 3.7e-11 km**3=F14: There are 86400 seconds in a day.=F15: There are 24 hours in a day.=F16: The total world population is 7.2e+9=F17: The total volume of the earth is 259875159532 cubic miles=F18: 1.6e6 gallons of water move down the Mississippi River per second.=F19: 60 minutes make up an hour.=F20: An average human inhales 6 liters of air every minute",
        "fact_transform": {
            "17": 0,
            "13": 1
        }
    },
    {
        "question": "How many multi-link cubes would you need to fill a fridge?",
        "program": "PROGRAM:=Q1: What is the average volume of a fridge?=Q2: What is the average volume of a multi-link cube?=A1: 17.25 ft**3=A2: 0.000035 ft**3=Q2 -> A2 | F8=Q1 -> A1 | F16=P: Div(Q1, Q2)",
        "answer": "492857",
        "context": "CONTEXT:=F1: The weight of the person is 140 lb=F2: The mass of a maus tank is 170551 kg=F3: 170g of CO2 is there in a can of soda.=F4: The height of a Shard is 244 metres=F5: The surface area of The Shard is 398490 sq. metre=F6: The limit of a planet size is 10x that of jupiter.=F7: The average mass of a mouse is 0.02 kg=F8: The average volume of a multi-link cube is 0.000035 cubic feet.=F9: The thickness of the connecting parts in a microchip is 0.9e-9 m=F10: The average volume of a single gold ball is 40.672693 cubic cm=F11: The thickness of an average atom is 0.3e-9 m=F12: The volume of the oceans is 1.3e+9 km**3=F13: The size of Jupiter is 1.4e+15 km cube.=F14: The volume of an ant is 1e-8 metre cube=F15: Around 1e+9 cans are made every day.=F16: The average volume of a fridge is 17.25 cubic feet.=F17: The average thickness of a sheet of paper is 0.00008 m=F18: The volume of a golf ball is 4e-5 km**3=F19: The height is 1.73 m=F20: An average model rocket (drone), can carry 40 lbs.",
        "fact_transform": {
            "15": 0,
            "7": 1
        }
    },
    {
        "question": "How many RBCs equal one cc in volume?",
        "program": "PROGRAM:=Q1: What is the volume of a single red blood cell?=Q2: How many cubic centimeters is 1 cc=A1: 87e-12 cm**3=A2: 1 cm**3=Q2 -> A2 | F19=Q1 -> A1 | F11=P: Div (Q2, Q1)",
        "answer": "11494252873",
        "context": "CONTEXT:=F1: The thickness of the connecting parts in a microchip is 0.9e-9 m=F2: The total volume of the ocean cover is 300000000 cubic miles=F3: The cube of the radius of earth is radius powered to 3=F4: The volume of a single golf ball is 0.01 gallon=F5: The radius of Earth is 4000 miles=F6: The limit of a planet size is 10x that of jupiter.=F7: The average volume of a single cherry is 4.1 cc.=F8: There are 365 days in a year.=F9: The total volume of the earth is 259875159532 cubic miles=F10: The size of Jupiter is 1.4e+15 km cube.=F11: The volume of a single red blood cell is 87e-12 cc=F12: The mass of the corona virus in a patient's body is 50e-6 grams=F13: The thickness of an average atom is 0.3e-9 m=F14: The volume of cup of water is 250 cc=F15: The volume of a sphere is 4 times the radius cube.=F16: The volume of one molecule of water is 3e-23 cc=F17: 417234 cherries are going to be loosely stacked.=F18: The volume of the water cooler jug given is 5 gallon.=F19: 1 cubic centimeter makes up 1 cc=F20: The total number of people associated with CoronaVirus right now are 1.58e+6",
        "fact_transform": {
            "10": 0,
            "18": 1
        }
    },
    {
        "question": "If Donald Trump weighed as much as an average Clydesdale horse, but kept his current density and proportions, how tall would he be?",
        "program": "PROGRAM:=Q1: What is the relation between length and mass of a human being given it's surface area and density?=Q2: How many times is the new mass greater than the original mass?=Q3: What is the mass of Donald Trump?=Q4: What is the mass of an average Clydesdale horse?=A1: 190 cm=A2: 111 kg=A3: 850 kg=Q4 -> A3 | F1=Q3 -> A2 | F16=Q2 -> Div (Q4, Q3)=Q1 -> A1 | F18=P: Mul (Q1, Q2)",
        "answer": "1454 cm",
        "context": "CONTEXT:=F1: The mass of an average Clydesdale horse is 850 kg=F2: There are 24 hours in a day.=F3: An average model rocket (drone), can carry 40 lbs.=F4: The limit of a planet size is 10x that of jupiter.=F5: The weight of the person is 140 lb=F6: The height is 1.73 m=F7: There are 60 seconds in a minute.=F8: The total human population is 7.2e+9=F9: The average force exerted while crushing a human skull is 2300 N=F10: the average family size is 4=F11: Ideal wingpsan length is 83% of the length of the flying body.=F12: There are 60 minutes in an hour.=F13: The average body height of a person is 170 cm.=F14: Around 360 sq. yards is required to build a house with a yard.=F15: There are 1000000 numbers in a million=F16: The mass of Donald Trump is 111 kg=F17: The size of Jupiter is 1.4e+15 km cube.=F18: The length of a human and it's mass and linearly directly proportional to each other and the length of Donald Trump is 190 cm=F19: It takes around 1 second to count a number=F20: The average thickness of a sheet of paper is 0.00008 m",
        "fact_transform": {
            "17": 0,
            "15": 1,
            "0": 2
        }
    },
    {
        "question": "What would it cost to build a sailing frigate?",
        "program": "PROGRAM:=Q1: What is the total raw materials cost of a sailing frigate?=Q2: What is the manufacturing cost of a sailing frigate?=A1: $5e+6=A2: $10e+5=Q2 -> A2 | F2=Q1 -> A1 | F5=P: Add (Q1, Q2)",
        "answer": "$6e+6",
        "context": "CONTEXT:=F1: The total habitable land in the world is 6070285 km=F2: The total manufacturing cost to build a sailing frigate is 10e+5 USD (assumption)=F3: The average thickness of a sheet of paper is 0.00008 m=F4: The force exerted by the wind travelling by metre per hour is 4.6e-4 N-hour/metre=F5: The total raw materials cost to make a sailing frigate is 5e+6 USD (assumption)=F6: The average body height of a person is 170 cm.=F7: The size of Washington DC is 177 km**2=F8: The number of calories burnt while climbing a step is 0.17 calories=F9: The length of a human and it's mass and linearly directly proportional to each other and the length of Donald Trump is 190 cm=F10: The height of the tower is 300 km=F11: It costs about 100 USD to fly the drone for a sq.km.=F12: The density of steel is 8e+9 kg/km**3=F13: Ideal wingpsan length is 83% of the length of the flying body.=F14: An average model rocket (drone), can carry 40 lbs.=F15: The height is 1.73 m=F16: It takes an average of 50 hp while applying brakes to stop the car from moving forward.=F17: The amount of calories present in a chips bag is 1242.=F18: The mass of Donald Trump is 111 kg=F19: The weight of the person is 140 lb=F20: The force exerted by the car on the road by the virtue of gravity is 15000 N",
        "fact_transform": {
            "4": 0,
            "1": 1
        }
    },
    {
        "question": "To prevent the loss of water due to evaporation from a lake, oil is spread to form a thin film. How much oil is needed for this purpose?",
        "program": "PROGRAM:=Q1: What is the surface area of the lake?=Q2: What is the thickness of the thin film?=A1: 708000 m**2=A2: 0.005 m=Q2 -> A2 | F17=Q1 -> A1 | F14=P: Mul (Q1, Q2)",
        "answer": "3540 m**3",
        "context": "CONTEXT:=F1: The total volume of paint available to be painted on the wall is 0.13 cubic feet=F2: The volume of the oceans is 1.3e+9 km**3=F3: The average surface area in earth's oceans is 130434782 squaremiles=F4: 1 mL heated with 4.1 J can change the temperature by 1 degree celsius.=F5: An average temperature of Arizona is 35 degree celsius=F6: The diameter of the pipe is 0.001 miles=F7: The total volume of the earth is 259875159532 cubic miles=F8: One foot is equal to 30 cm=F9: The total volume of the ocean cover is 300000000 cubic miles=F10: The total volume of earth's oceans is 300000000 cubic miles=F11: The total volume of Mediterranean Sea is 439000 km cube=F12: The total volume of water in the oceans is 321000000 cubic miles=F13: The average temperature of a tropical area is 26 degree celsius.=F14: The surface area of a lake is 708000 metre square=F15: The surface area of the pipe is 0.75 times the diameter square.=F16: The volume of a golf ball is 4e-5 km**3=F17: The thickness of the thin film is 0.005 metres=F18: The total surface area of the wall is 400 sq. ft=F19: The average gold present in a shipwreck is 20000 USD=F20: The rate at which waters flows in a typical sea is 6.4 kmph",
        "fact_transform": {
            "13": 0,
            "16": 1
        }
    },
    {
        "question": "How many square feet of toilet paper are in the school at any point of time?",
        "program": "PROGRAM:=Q1: What is the surface area of a toilet paper when spread out?=Q7: how many toilet paper rolls are there in a school?=Q8: How many toilet paper rolls are there in total when all the lavatories in the school are considered?=Q2: What is the number of lavatories in a school?=Q3: What is the backup stock quantity of toilet papers in the school?=Q4: How many toilet paper rolls are there in a single lavatory?=Q5: How many students in a school?=Q6: How many students can a lavatory service?=A1: 88 in**2=A2: 13=A3: 450=A4: 40=A5: 516=A6: 1=Q6 -> A4 | F6=Q5 -> A5 | F12=Q2 -> Div(Q5, Q6)=Q4 -> A6 | F6=Q8 -> Mul(Q2, Q4)=Q3 -> A3 | F16=Q7 -> Add(Q8, Q3)=Q1 -> A1 | F15=P: Mul(Q1, Q7)",
        "answer": "40774 in ** 2",
        "context": "CONTEXT:=F1: The surface area of The Shard is 398490 sq. metre=F2: The bee flies for a total of around 4 hours each day.=F3: The size of Jupiter is 1.4e+15 km cube.=F4: The average thickness of a sheet of paper is 0.00008 m=F5: The height is 1.73 m=F6: 1 lavatory for 40 students as per K-12 Toilet Requirement Summary by CDE.=F7: The height of a Shard is 244 metres=F8: The minimum size visible to a human is 1e-4 m=F9: The limit of a planet size is 10x that of jupiter.=F10: The average speed at which a bee flies is 15 miles per hour=F11: The volume of the swimming pool is 2500 cubic metre=F12: A typical US School has 516 students.=F13: The normal size of a cell is 1e-6 m=F14: Number of toilet paper rolls in a lavatory is 1.=F15: Surface area of toilet paper roll is 88 sq. in=F16: There are an average of 450 toilet paper rolls as back-up stock in a school.=F17: The average mass of a mouse is 0.02 kg=F18: The mass of a maus tank is 170551 kg=F19: The volume of a single water drop is 18e-10 cubic metre=F20: The volume of an ant is 1e-8 metre cube",
        "fact_transform": {
            "14": 0,
            "5": 1,
            "11": 2,
            "15": 3,
            "13": 4
        }
    },
    {
        "question": "If human skin could photosynthesise with the same efficiency as a leaf, would it produce enough energy for us to survive or would we still need to eat food?",
        "program": "PROGRAM:=Q1: How much energy is produced by a leaf through photosynthesis?=Q2: What is the ratio of surface area of the human body to a typical leaf?=Q3: What is the surface area of a human body?=Q4: What is the surface area of a leaf?=A1: 200 cal=A2: 0.85 m**2=A3: 0.0075 m**2=Q4 -> A3 | F19=Q3 -> A2 | F9=Q2 -> Div (Q3, Q4)=Q1 -> A1 | F16=P: Mul (Q1, Q2)",
        "answer": "22666 cal",
        "context": "CONTEXT:=F1: We gain around 2200 cal walking around equator all day, naked.=F2: The rate of perspiration of skin is 1.5 L/hour=F3: The normal size of a cell is 1e-6 m=F4: The volume of the oceans is 1.3e+9 km**3=F5: The height is 1.73 m=F6: The total habitable land in the world is 6070285 km=F7: The amount of calories present in a chips bag is 1242.=F8: The rate of perspiration of leaves is 1.8 L/hour=F9: The surface area of a human body is 0.85 metre square (one side)=F10: The minimum size visible to a human is 1e-4 m=F11: An average farm produces around 52000 pounds of food each year.=F12: The average body height of a person is 170 cm.=F13: The volume of a golf ball is 4e-5 km**3=F14: An average person's annual consumption of food is 1996 pounds=F15: The average thickness of a sheet of paper is 0.00008 m=F16: The energy produced by a leaf during photosynthesis daily is 200 cal.=F17: Ideal wingpsan length is 83% of the length of the flying body.=F18: The number of calories burnt while climbing a step is 0.17 calories=F19: The surface area of a leaf is 0.0075 metre square (one side)=F20: It takes an average of 50 hp while applying brakes to stop the car from moving forward.",
        "fact_transform": {
            "15": 0,
            "8": 1,
            "18": 2
        }
    },
    {
        "question": "This winter, the East coast has been hit by a number of snow storms. How many hours does a person spend shoveling the walk way after a snow storm.",
        "program": "PROGRAM:=Q1: What is the volume of ice accumulated on the driveway after a typical snowstorm?=Q2: How long does it take to clear 1 metre cube of ice?=A1: 60 m**3=A2: 10 min/m**3=Q2 -> A2 | F7=Q1 -> A1 | F17=P: Mul (Q1, Q2)",
        "answer": "600 min",
        "context": "CONTEXT:=F1: The barber has been cutting the hair for 55 years.=F2: The average thickness of a sheet of paper is 0.00008 m=F3: The number of calories burnt while climbing a step is 0.17 calories=F4: The population given is 1e+6=F5: There are 24 hours in a day.=F6: The total land area on Earth is 501e+6 km square=F7: It takes around 10 minutes to clear out 1 metre cube of ice.=F8: The amount of calories present in a chips bag is 1242.=F9: The force exerted by the car on the road by the virtue of gravity is 15000 N=F10: There are around 100000 hairs on our head.=F11: The total volume of the Mount Everest is 2100000000000 cubic ft=F12: The average volume of a single dump truck is 3178.32 cubic ft.=F13: The force exerted by the wind travelling by metre per hour is 4.6e-4 N-hour/metre=F14: An average of 12 visits is observed for haircuts in a year.=F15: The height of the ceiling in the restaurant is 32 feet.=F16: The time interval between two full moons is 30 days=F17: The volume of ice accumulated on the driveway after a typical snowstorm is around 60 metre cube=F18: The average length of hair cut in a single haircut is 1.8e-5 miles=F19: The height is 1.73 m=F20: Considering people to be in the midpoint of their areas (assuming to be squares), so they have to travel the length of their square to reach another person.",
        "fact_transform": {
            "16": 0,
            "6": 1
        }
    },
    {
        "question": "What fraction of the earth's volume is provided by the oceans?",
        "program": "PROGRAM:=Q1: What is the total volume of the earth?=Q2: What is the total volume of the ocean cover?=A1: 259875159532 m**3=A2: 300000000 m**3=Q2 -> A2 | F15=Q1 -> A1 | F1=P: Div (Q2, Q1)",
        "answer": "0.001",
        "context": "CONTEXT:=F1: The total volume of the earth is 259875159532 cubic miles=F2: The total water present in an average human is 3.7e-11 km**3=F3: The cube of the radius of earth is radius powered to 3=F4: The total water present on earth is 1.38e+9 km**3=F5: The size of Jupiter is 1.4e+15 km cube.=F6: The density of a single water molecule is 4.156e+12 kg/cubic mile=F7: The total volume of water molecules is 32000000 cubic miles=F8: The volume of one molecule of water is 3e-23 cc=F9: The volume of a golf ball is 4e-5 km**3=F10: The volume of cup of water is 250 cc=F11: The radius of Earth is 4000 miles=F12: The average surface area in earth's oceans is 130434782 squaremiles=F13: The limit of a planet size is 10x that of jupiter.=F14: The total volume of earth's oceans is 300000000 cubic miles=F15: The total volume of the ocean cover is 300000000 cubic miles=F16: There are around 1000 significantly big clouds in the sky.=F17: The volume of the oceans is 1.3e+9 km**3=F18: The average fish consumption of a single person is 16.5 kgs per year (according to a survey in 2005)=F19: The volume of a sphere is 4 times the radius cube.=F20: The total world population is 7.2e+9",
        "fact_transform": {
            "0": 0,
            "14": 1
        }
    },
    {
        "question": "How long would it take to completely drain the Mediterranean Sea?",
        "program": "PROGRAM:=Q1: What is the volume of the Mediterranean sea?=Q2: What is the rate at which water flows out of the Mediterranean sea?=A1: 439000 km=A2: 4.4 km*hour**-1=Q2 -> A2 | F7=Q1 -> A1 | F1=P: Div (Q1, Q2)",
        "answer": "99772 hours",
        "context": "CONTEXT:=F1: The total volume of Mediterranean Sea is 439000 km cube=F2: The average temperature of a tropical area is 26 degree celsius.=F3: The number of calories burnt while climbing a step is 0.17 calories=F4: The average sleep quantity of a person is 8 hours=F5: The limit of a planet size is 10x that of jupiter.=F6: There are 24 hours in a single day.=F7: The rate at which waters flows in a typical sea is 6.4 kmph=F8: There are 24 hours in a day.=F9: The lungs and heart are 15 times deeper when compared to the skin.=F10: The volume of the oceans is 1.3e+9 km**3=F11: The volume of a golf ball is 4e-5 km**3=F12: There are 365 days in a year.=F13: The size of Jupiter is 1.4e+15 km cube.=F14: The time interval between two full moons is 30 days=F15: 1 mL heated with 4.1 J can change the temperature by 1 degree celsius.=F16: The amount of calories present in a chips bag is 1242.=F17: The average life expectancy is 72 years=F18: It takes around 1 minute for the heat to peel off the skin.=F19: The speed at which Earth moves is 1656 kmph=F20: An average temperature of Arizona is 35 degree celsius",
        "fact_transform": {
            "0": 0,
            "6": 1
        }
    },
    {
        "question": "How many dump trucks would it take to cart away Mount Everest?",
        "program": "PROGRAM:=Q1: What is the total volume of Mount Everest?=Q2: What is the total volume of a single dump truck?=A1: 2100000000000 ft**3=A2: 3180 ft**3=Q2 -> A2 | F14=Q1 -> A1 | F20=P: Div(Q1, Q2)",
        "answer": "660377358",
        "context": "CONTEXT:=F1: The amount of calories present in a chips bag is 1242.=F2: The average volume of a single gold ball is 40.672693 cubic cm=F3: The weight of the person is 140 lb=F4: The volume of a single Cessna 172 is 248 cubic metre=F5: The population given is 1e+6=F6: The volume of the oceans is 1.3e+9 km**3=F7: The volume of a single post-it sheet is 0.007 cubic metre=F8: The number of calories burnt while climbing a step is 0.17 calories=F9: An average model rocket (drone), can carry 40 lbs.=F10: An average temperature of Arizona is 35 degree celsius=F11: The average temperature of a tropical area is 26 degree celsius.=F12: The circumference of the Earth is 1577756575 inches=F13: 1 mL heated with 4.1 J can change the temperature by 1 degree celsius.=F14: The average volume of a single dump truck is 3178.32 cubic ft.=F15: The volume of a golf ball is 4e-5 km**3=F16: The average volume of a suitcase is 75000 cubic cm=F17: The length of a nerd rope is 12 inches=F18: The total land area on Earth is 501e+6 km square=F19: Considering people to be in the midpoint of their areas (assuming to be squares), so they have to travel the length of their square to reach another person.=F20: The total volume of the Mount Everest is 2100000000000 cubic ft",
        "fact_transform": {
            "19": 0,
            "13": 1
        }
    },
    {
        "question": "How many new telephone numbers became available when the three digit area code system was installed?",
        "program": "PROGRAM:=Q1: How many times more combinations are possible with the new three digit area code?=Q2: How many combinations were possible with the old 7 digit phone number?=Q3: How many combinations are possible with the three additional digits.=A1: 1000=A2: 1e+7=Q2 -> A2 | F16=Q1 -> A1 | F2=Q3 -> Mul (Q2, Q1)=P: Sub(Q3, Q2)",
        "answer": "9.99E+09",
        "context": "CONTEXT:=F1: There are 365 days in a year.=F2: The new combinations possible with the three digit code are 1000.=F3: the average family size is 4=F4: There are 1000000 numbers in a million=F5: The circumference of the Earth is 1577756575 inches=F6: Around 360 sq. yards is required to build a house with a yard.=F7: There are 24 hours in a day.=F8: The length of a nerd rope is 12 inches=F9: The volume of a single post-it sheet is 0.007 cubic metre=F10: There are 60 seconds in a minute.=F11: The average thickness of a sheet of paper is 0.00008 m=F12: The normal size of a cell is 1e-6 m=F13: The minimum size visible to a human is 1e-4 m=F14: There are 1440 minutes in a day.=F15: It takes around 1 second to count a number=F16: The number of original combinations before were 1e+7=F17: The total human population is 7.2e+9=F18: The volume of a single Cessna 172 is 248 cubic metre=F19: The height is 1.73 m=F20: There are 60 minutes in an hour.",
        "fact_transform": {
            "1": 0,
            "15": 1
        }
    },
    {
        "question": "How old are you if you are a million seconds old?",
        "program": "PROGRAM:=Q1: How many days does a million seconds equal to?=Q2: How many days are there in a year?=Q3: How many hours does a million seconds equal to?=Q4: How many hours are there in a day?=Q5: How many minutes does a million seconds equal to?=Q6: How many minutes are there in an hour?=Q7: How many seconds does a million seconds equate to?=Q8: How many seconds are there in a minute?=A1: 365 days/year=A2: 24 hours/day=A3: 60 minutes/hour=A4: 60 seconds/minutes=A5: 1000000 seconds=Q8 -> A4 | F13=Q7 -> A5 | F18=Q5 -> Div(Q7,Q8)=Q6 -> A3 | F1=Q3 -> Div(Q5,Q6)=Q4 -> A2 | F17=Q1 -> Div(Q3, Q4)=Q2 -> A1 | F12=P: Div(Q1, Q2)",
        "answer": "0.031 years",
        "context": "CONTEXT:=F1: There are 60 minutes in an hour.=F2: There are a 1000000 hours in a million hours.=F3: The speed of light in kmph is 1.079e+9 kmph=F4: The time interval between two full moons is 30 days=F5: There are 24 hours in a single day.=F6: The speed at which Earth moves is 1656 kmph=F7: It takes around 1 second to count a number=F8: The average life expectancy is 72 years=F9: The average sleep quantity of a person is 8 hours=F10: There are 60 seconds in a minute.=F11: The mass of an average Clydesdale horse is 850 kg=F12: There are 365 days in a year.=F13: There are 60 seconds in a minute=F14: The duration of my favorite song is 3 minutes.=F15: The size of Jupiter is 1.4e+15 km cube.=F16: There are 1000000 numbers in a million=F17: There are 24 hours in a day.=F18: There are 1000000 seconds in a million seconds=F19: There are 1440 minutes in a day.=F20: The limit of a planet size is 10x that of jupiter.",
        "fact_transform": {
            "11": 0,
            "16": 1,
            "0": 2,
            "12": 3,
            "17": 4
        }
    },
    {
        "question": "How many coins have ever been minted?",
        "program": "PROGRAM:=Q1: How many coin minting facilities are there in the world?=Q2: How many coins did an average coining minting facility mint till now?=Q3: For how many years has an average minting facility been minting coins?=Q4: How many coins does a minting facility mint in a year?=A1: 250=A2: 120=A3: 1e+8=Q4 -> A3 | F8=Q3 -> A2 | F16=Q2 -> Mul (Q3, Q4)=Q1 -> A1 | F7=P: Mul (Q1, Q2)",
        "answer": "3000000000000",
        "context": "CONTEXT:=F1: There are 24 hours in a day.=F2: Around 7000 softballs are produced daily. (Assumption)=F3: It takes around 1 second to count a number=F4: The average number of leaves on a single tree are 50000=F5: On an average, we meet 140 new people every year.=F6: The number of universities in the US is 5300=F7: There are around 250 coin minting facilities in the world.=F8: An average of 1e+8 coins are minted each year by a facility.=F9: There are 1000000 numbers in a million=F10: The total number of trees in the world are 3e+12=F11: The average volume of a penny is 0.00036 cubic metre=F12: The volume of an ant is 1e-8 metre cube=F13: There are 60 minutes in an hour.=F14: There are 261 working days in a year.=F15: The average life expectancy is 72 years.=F16: An average coin minting facility is 120 years old.=F17: There are 60 seconds in a minute.=F18: The average volume of a jar is 0.05 cubic metre=F19: The surface area of The Shard is 398490 sq. metre=F20: The height of a Shard is 244 metres",
        "fact_transform": {
            "6": 0,
            "15": 1,
            "7": 2
        }
    },
    {
        "question": "How many children are needed to have a mass the same as an elephant?",
        "program": "PROGRAM:=Q1: What is the average mass of an Elephant?=Q2: What is the average mass of a child?=A1: 4200 kg=A2: 25 kg.=Q2 -> A2 | F20=Q1 -> A1 | F1=P: Div(Q1, Q2)",
        "answer": "168",
        "context": "CONTEXT:=F1: The average mass of an Elephant is 4200 kg.=F2: There are 60 seconds in a minute.=F3: The average body height of a person is 170 cm.=F4: There are 24 hours in a day.=F5: The average thickness of a sheet of paper is 0.00008 m=F6: The height is 1.73 m=F7: It takes around 1 second to count a number=F8: The average volume of a plant is 1570 cc (20cm height and 5cm radius)=F9: Assuming the average volume of a single animal to be 7200 cc (90x40x2)=F10: The normal size of a cell is 1e-6 m=F11: The minimum size visible to a human is 1e-4 m=F12: The size of Jupiter is 1.4e+15 km cube.=F13: The number of animal species in the world are 7.7e+6=F14: There are 60 minutes in an hour.=F15: The weight of the person is 140 lb=F16: The number of plant species in the world are 391000=F17: There are 1000000 numbers in a million=F18: Ideal wingpsan length is 83% of the length of the flying body.=F19: The limit of a planet size is 10x that of jupiter.=F20: The average mass of a child is 25 kg.",
        "fact_transform": {
            "0": 0,
            "19": 1
        }
    },
    {
        "question": "How far does a bee fly each day?",
        "program": "PROGRAM:=Q1: How many hours does the bee spend on flying each day?=Q2: What is the average speed at which a bee flies?=A1: 4 hour=A2: 15 miles/hour=Q2 -> A2 | F20=Q1 -> A1 | F15=P: Mul (Q1, Q2)",
        "answer": "60 miles",
        "context": "CONTEXT:=F1: The average sleep quantity of a person is 8 hours=F2: An average model rocket (drone), can carry 40 lbs.=F3: Ideal wingpsan length is 83% of the length of the flying body.=F4: The average body height of a person is 170 cm.=F5: The total canary population in the world is 100000=F6: There are 24 hours in a day.=F7: The time interval between two full moons is 30 days=F8: There are 365 days in a year.=F9: The volume of a single Cessna 172 is 248 cubic metre=F10: Around 33 percent of canaries are flying right now.=F11: 60 minutes make up an hour.=F12: The volume of a single post-it sheet is 0.007 cubic metre=F13: It costs about 100 USD to fly the drone for a sq.km.=F14: The average life expectancy is 72 years=F15: The bee flies for a total of around 4 hours each day.=F16: The minimum size visible to a human is 1e-4 m=F17: The normal size of a cell is 1e-6 m=F18: The total habitable land in the world is 6070285 km=F19: An average human inhales 6 liters of air every minute=F20: The average speed at which a bee flies is 15 miles per hour",
        "fact_transform": {
            "14": 0,
            "19": 1
        }
    },
    {
        "question": "How many people would COVID-19 kill if it were 1918?",
        "program": "PROGRAM:=Q1: What is the total deaths to population ratio in Covid?=Q2: What was the population of mankind in 1918?=Q3: What is the total human population currently?=Q4: How many deaths have been caused world wide due to covid currently?=A1: 1.8e+9=A2: 7.2e+9=A3: 3.3e+6=Q4 -> A3 | F9=Q3 -> A2 | F17=Q2 -> Div (Q4, Q3)=Q1 -> A1 | F7=P: Mul (Q1, Q2)",
        "answer": "8.20E+05",
        "context": "CONTEXT:=F1: The mass of Donald Trump is 111 kg=F2: It takes around 1 second to count a number=F3: The speed at which Earth moves is 1656 kmph=F4: The time interval between two full moons is 30 days=F5: The total number of people associated with CoronaVirus right now are 1.58e+6=F6: There are 365 days in a year.=F7: The population of mankind in 1918 is 1.8e+9=F8: The volume of the oceans is 1.3e+9 km**3=F9: The total deaths caused due to covid till now are 3.3e+6=F10: There are 1440 minutes in a day.=F11: The mass of the corona virus in a patient's body is 50e-6 grams=F12: The duration of my favorite song is 3 minutes.=F13: The mass of an average Clydesdale horse is 850 kg=F14: 417234 cherries are going to be loosely stacked.=F15: The length of a human and it's mass and linearly directly proportional to each other and the length of Donald Trump is 190 cm=F16: The volume of a golf ball is 4e-5 km**3=F17: The total human population currently is 7.2e+9=F18: There are 60 minutes in an hour.=F19: There are 24 hours in a single day.=F20: The average volume of a single cherry is 4.1 cc.",
        "fact_transform": {
            "6": 0,
            "16": 1,
            "8": 2
        }
    },
    {
        "question": "What percentage of all the words in the English language would an audio transcriptionist who worked 40 hours a week for 4 years have typed?",
        "program": "PROGRAM:=Q1: What is the number of words the transcriptionist might have typed in 4 years?=Q2: How many words are there in English?=Q3: How many words did the writer write in a year?=Q4: How many years did the writer write for?=Q5: How many hours a week did the writer work?=Q6: How many weeks are there in a year?=Q7: How many words did the writer write in an hour?=Q8: How many hours did the writer work?=Q9: What fraction of English words was the writer able to cover over the 4 years?=Q10: What is the numerical coefficent for converting the fraction to percentage?=A1: 179476=A2: 4=A3: 52=A4: 15=A5: 40=A6: 100=Q8 -> A5 | F12=Q7 -> A4 | F6=Q5 -> Mul (Q7, Q8)=Q6 -> A3 | F14=Q3 -> Mul (Q5, Q6)=Q4 -> A2 | F17=Q1 -> Mul (Q3, Q4)=Q2 -> A1 | F19=Q9 -> Div (Q1, Q2)=Q10 -> A6 | F20=P: Mul (Q9, Q10)",
        "answer": "69.5",
        "context": "CONTEXT:=F1: A normal heart beats 80 times a minute.=F2: The average volume of a single cherry is 4.1 cc.=F3: The volume of glue stick is 100 cc=F4: There are 7 days in a week.=F5: The volume of a horse is 500000 cc=F6: The writer wrote about 15 words an hour.=F7: The duration of my favorite song is 3 minutes.=F8: There are 24 hours in a day.=F9: There are 60 minutes in an hour.=F10: The weight of the person is 140 lb=F11: An average model rocket (drone), can carry 40 lbs.=F12: The writer wrote for 40 hours a week.=F13: The amount of calories present in a chips bag is 1242.=F14: There are 52 weeks in a year.=F15: 417234 cherries are going to be loosely stacked.=F16: The number of calories burnt while climbing a step is 0.17 calories=F17: The writer wrote for 4 years.=F18: There are 365 days in a year.=F19: There are 179476 words in english language.=F20: The numerical coefficient for converting the factor to percent is 100",
        "fact_transform": {
            "18": 0,
            "16": 1,
            "13": 2,
            "5": 3,
            "11": 4,
            "19": 5
        }
    },
    {
        "question": "Under ideal conditions, the bacterium eNSO can reproduce in 10 minutes. How many eNSO can claim the same ancestor after 24 hours?",
        "program": "PROGRAM:=Q1: What is the rate at which the bacteria reproduces?=Q2: How many times will the bacteria reproduce in the day?=Q3: How many hours are there in a day?=Q4: How many times does the bacteria reproduce in an hour?=Q5: How many minutes are there in an hour?=Q6: For how many minutes, does the bacteria reproduce?=A1: 2=A2: 24 hours=A3: 60 minutes/hour=A4: 10 minutes=Q6 -> A4 | F6=Q5 ->A3 | F19=Q4 -> Div (Q5, Q6)=Q3 -> A2 | F18=Q2 -> Mul (Q3, Q4)=Q1 -> A1 | F13=P: Pow (Q1, Q2)",
        "answer": "2.23E+43",
        "context": "CONTEXT:=F1: The energy produced by a leaf during photosynthesis daily is 200 cal.=F2: The average sleep quantity of a person is 8 hours=F3: The surface area of a leaf is 0.0075 metre square (one side)=F4: There are 60 seconds in a minute.=F5: The average life expectancy is 72 years=F6: The bacteria reproduces for every 10 minutes.=F7: The number of universities in the US is 5300=F8: An average intake of freshman at a university is 550=F9: There are 1000000 numbers in a million=F10: The total land area on Earth is 501e+6 km square=F11: The population given is 1e+6=F12: It takes around 1 second to count a number=F13: The rate at which it reproduces is 2 offspring per reproduction.=F14: There are 365 days in a year.=F15: The volume of the oceans is 1.3e+9 km**3=F16: Considering people to be in the midpoint of their areas (assuming to be squares), so they have to travel the length of their square to reach another person.=F17: The volume of a golf ball is 4e-5 km**3=F18: There are 24 hours in a day.=F19: There are 60 minutes in an hour.=F20: The time interval between two full moons is 30 days",
        "fact_transform": {
            "12": 0,
            "17": 1,
            "18": 2,
            "5": 3
        }
    },
    {
        "question": "How many high fives has Lebron James given/received?",
        "program": "PROGRAM:=Q1: How many matches has Lebron James played?=Q2: What is the average number of High-fives that Lebron has been a part of, in a match on an average?=A1: 1308=A2: 200=Q2 -> A2 | F6=Q1 -> A1 | F14=P: Mul (Q2, Q1)",
        "answer": "261600",
        "context": "CONTEXT:=F1: The weight of the person is 140 lb=F2: The volume of a golf ball is 4e-5 km**3=F3: The length of a human and it's mass and linearly directly proportional to each other and the length of Donald Trump is 190 cm=F4: The height is 1.73 m=F5: The average volume of a single cherry is 4.1 cc.=F6: Lebron has been a participant in at least 200 high fives in a single match (considering he only high-fives during a basketball match)=F7: The average thickness of a sheet of paper is 0.00008 m=F8: The average mass of a mouse is 0.02 kg=F9: 417234 cherries are going to be loosely stacked.=F10: The mass of an average Clydesdale horse is 850 kg=F11: The mass of a maus tank is 170551 kg=F12: The thickness of the connecting parts in a microchip is 0.9e-9 m=F13: The volume of the oceans is 1.3e+9 km**3=F14: Lebron has played a total of 1308 games till now.=F15: An average model rocket (drone), can carry 40 lbs.=F16: On an average, we meet 140 new people every year.=F17: The length of a nerd rope is 12 inches=F18: The circumference of the Earth is 1577756575 inches=F19: The average life expectancy is 72 years.=F20: The mass of Donald Trump is 111 kg",
        "fact_transform": {
            "13": 0,
            "5": 1
        }
    },
    {
        "question": "Assuming that humans naturally had bird like wings, how large should the wingspan need to be in order for the average human to be capable of flight?",
        "program": "PROGRAM:=Q1: What is the relation between the length of wingspan and the length of the flying body?=Q2: What is the average height of a human being?=A1: 0.83=A2: 170 cm=Q2 -> A2 | F8=Q1 -> A1 | F4=P: Mul (Q1, Q2)",
        "answer": "141 cm",
        "context": "CONTEXT:=F1: The minimum size visible to a human is 1e-4 m=F2: The limit of a planet size is 10x that of jupiter.=F3: The mass of an average Clydesdale horse is 850 kg=F4: Ideal wingpsan length is 83% of the length of the flying body.=F5: The force exerted by the car on the road by the virtue of gravity is 15000 N=F6: The average speed at which a bee flies is 15 miles per hour=F7: The volume of a single post-it sheet is 0.007 cubic metre=F8: The average body height of a person is 170 cm.=F9: The height is 1.73 m=F10: An average model rocket (drone), can carry 40 lbs.=F11: The force exerted by the wind travelling by metre per hour is 4.6e-4 N-hour/metre=F12: The mass of Donald Trump is 111 kg=F13: The volume of a single Cessna 172 is 248 cubic metre=F14: The bee flies for a total of around 4 hours each day.=F15: The time interval between two full moons is 30 days=F16: The length of a human and it's mass and linearly directly proportional to each other and the length of Donald Trump is 190 cm=F17: There are 24 hours in a day.=F18: The average thickness of a sheet of paper is 0.00008 m=F19: The weight of the person is 140 lb=F20: The size of Jupiter is 1.4e+15 km cube.",
        "fact_transform": {
            "3": 0,
            "7": 1
        }
    },
    {
        "question": "If you had a stack of $2 coins as tall as Mt Kosciusko, what would it be worth?",
        "program": "PROGRAM:=Q1: What is the total number of coins?=Q2: What is the value of a single coin in the stack?=Q3: What is the height of MT. Kosciusko?=Q4: What is the average thickness of a 2 dollar coin?=A1: 2=A2: 2228 m=A3: 0.002 m=Q4 -> A3 | F15=Q3 -> A2 | F9=Q1 -> Div (Q3, Q4)=Q2 -> A1 | F2=P: Mul (Q1, Q2)",
        "answer": "$2228000",
        "context": "CONTEXT:=F1: The speed of light in kmph is 1.079e+9 kmph=F2: The value of a coin in the stack is 2 USD=F3: The time interval between two full moons is 30 days=F4: The speed at which Earth moves is 1656 kmph=F5: The rate of perspiration of leaves is 1.8 L/hour=F6: The number of calories burnt while climbing a step is 0.17 calories=F7: The volume occupied by a single molecule is 3e-23 metre cube=F8: An average model rocket (drone), can carry 40 lbs.=F9: The height of Mt. Kosciusko is 2228 m=F10: The volume occupied by a single TiO2 pigment is 0.000001 metre cube=F11: The thickness of an average atom is 0.3e-9 m=F12: There are 24 hours in a single day.=F13: The weight of the person is 140 lb=F14: We gain around 2200 cal walking around equator all day, naked.=F15: The thickness of a 2 dollar coin is 0.002 m=F16: The thickness of the connecting parts in a microchip is 0.9e-9 m=F17: The limit of a planet size is 10x that of jupiter.=F18: The size of Jupiter is 1.4e+15 km cube.=F19: The amount of calories present in a chips bag is 1242.=F20: The rate of perspiration of skin is 1.5 L/hour",
        "fact_transform": {
            "1": 0,
            "8": 1,
            "14": 2
        }
    },
    {
        "question": "How many bees are needed to pollinate an orchard?",
        "program": "PROGRAM:=Q1: How much nectar is present in a single orchard roughly?=Q2: How much nectar does a single bee carry?=A1: 2g=A2: 0.1g=Q2 -> A2 | F8=Q1 -> A1 | F10=P: Div (Q1, Q2)",
        "answer": "20",
        "context": "CONTEXT:=F1: The height is 1.73 m=F2: The total human population is 7.2e+9=F3: The average thickness of a sheet of paper is 0.00008 m=F4: The volume of a single post-it sheet is 0.007 cubic metre=F5: The bee flies for a total of around 4 hours each day.=F6: the average family size is 4=F7: The volume of a single Cessna 172 is 248 cubic metre=F8: An average bee can carry about 0.1g of nectar.=F9: The average temperature of a tropical area is 26 degree celsius.=F10: A single orchard contains about 2g of nectar.=F11: The amount of calories present in a chips bag is 1242.=F12: 1 mL heated with 4.1 J can change the temperature by 1 degree celsius.=F13: The number of calories burnt while climbing a step is 0.17 calories=F14: Around 360 sq. yards is required to build a house with a yard.=F15: The number of universities in the US is 5300=F16: An average farm produces around 52000 pounds of food each year.=F17: An average intake of freshman at a university is 550=F18: An average person's annual consumption of food is 1996 pounds=F19: An average temperature of Arizona is 35 degree celsius=F20: The average speed at which a bee flies is 15 miles per hour",
        "fact_transform": {
            "9": 0,
            "7": 1
        }
    },
    {
        "question": "What wind speed would be required to blow my car off the road?",
        "program": "PROGRAM:=Q1: What is the force exerted by the car on the road by the virtue of gravity?=Q2: What is the force exerted by the wind travelling by 1 metre per hour?=A1: 15000 N=A2: 4.6e-4 N*hour*m**-1=Q2 -> A2 | F17=Q1 -> A1 | F18=P: Div (Q1, Q2)",
        "answer": "3.2e+7 m*hour**-1",
        "context": "CONTEXT:=F1: The amount of calories present in a chips bag is 1242.=F2: The weight of the person is 140 lb=F3: The number of calories burnt while climbing a step is 0.17 calories=F4: The volume of a single Cessna 172 is 248 cubic metre=F5: The total habitable land in the world is 6070285 km=F6: Ideal wingpsan length is 83% of the length of the flying body.=F7: An average model rocket (drone), can carry 40 lbs.=F8: It takes an average of 50 hp while applying brakes to stop the car from moving forward.=F9: The average thickness of a sheet of paper is 0.00008 m=F10: An average temperature of Arizona is 35 degree celsius=F11: There are 24 hours in a day.=F12: The volume of a single post-it sheet is 0.007 cubic metre=F13: The volume of the oceans is 1.3e+9 km**3=F14: The height is 1.73 m=F15: The volume of a golf ball is 4e-5 km**3=F16: The time interval between two full moons is 30 days=F17: The force exerted by the wind travelling by metre per hour is 4.6e-4 N-hour/metre=F18: The force exerted by the car on the road by the virtue of gravity is 15000 N=F19: The average body height of a person is 170 cm.=F20: It costs about 100 USD to fly the drone for a sq.km.",
        "fact_transform": {
            "17": 0,
            "16": 1
        }
    },
    {
        "question": "How much energy a large rock has at impact?",
        "program": "PROGRAM:=Q1: What is the height that the rock is falling from?=Q2: What is the product of the mass of the rock and the gravity acting on it?=Q3: What is the mass of the rock?=Q4: What is the acceleration due to gravity acting on it?=A1: 100 m=A2: 2000 kg=A3: 10 m*s**-2=Q4 -> A3 | F11=Q3 -> A2 | F19=Q2 -> Mul (Q3, Q4)=Q1 -> A1 | F5=P: Mul (Q1, Q2)",
        "answer": "2e+6 J",
        "context": "CONTEXT:=F1: The density of gold is 19.3g/cc=F2: The speed at which Earth moves is 1656 kmph=F3: There are 24 hours in a single day.=F4: The time interval between two full moons is 30 days=F5: The height at which the rock is falling from is 100m.=F6: The weight of the person is 140 lb=F7: The thickness of an average atom is 0.3e-9 m=F8: The density of a normal egg is 1.03 g/cc=F9: The speed of light in kmph is 1.079e+9 kmph=F10: The average gold present in a shipwreck is 20000 USD=F11: The acceleration due to gravity acting on the rock is 10m/s**2=F12: The limit of a planet size is 10x that of jupiter.=F13: The thickness of the connecting parts in a microchip is 0.9e-9 m=F14: The average thickness of a sheet of paper is 0.00008 m=F15: The height is 1.73 m=F16: An average model rocket (drone), can carry 40 lbs.=F17: There are a total of 3e+6 shipwrecks currently under water now.=F18: The size of Jupiter is 1.4e+15 km cube.=F19: The mass of the rock is 2000 kg=F20: The weight of a normal egg is 60 g",
        "fact_transform": {
            "4": 0,
            "18": 1,
            "10": 2
        }
    },
    {
        "question": "How many steps would I need to climb to burn as many calories as there are in a bag of potato chips?",
        "program": "PROGRAM:=Q1: How many calories are burnt in climbing one step?=Q2: What is the amount of calories that are to be burnt?=A1: 0.17=A2: 1242=Q1 -> A1 | F9=Q2 -> A2 | F8=P: Div (Q2, Q1)",
        "answer": "7306",
        "context": "CONTEXT:=F1: There are 1000000 numbers in a million=F2: The force exerted by the wind travelling by metre per hour is 4.6e-4 N-hour/metre=F3: An average model rocket (drone), can carry 40 lbs.=F4: The limit of a planet size is 10x that of jupiter.=F5: It takes an average of 50 hp while applying brakes to stop the car from moving forward.=F6: The thickness of the connecting parts in a microchip is 0.9e-9 m=F7: There are 60 seconds in a minute.=F8: The amount of calories present in a chips bag is 1242.=F9: The number of calories burnt while climbing a step is 0.17 calories=F10: The circumference of the Earth is 1577756575 inches=F11: The size of Jupiter is 1.4e+15 km cube.=F12: There are 24 hours in a day.=F13: It takes around 1 second to count a number=F14: The thickness of an average atom is 0.3e-9 m=F15: The average thickness of a sheet of paper is 0.00008 m=F16: The force exerted by the car on the road by the virtue of gravity is 15000 N=F17: The length of a nerd rope is 12 inches=F18: There are 60 minutes in an hour.=F19: The weight of the person is 140 lb=F20: The height is 1.73 m",
        "fact_transform": {
            "8": 0,
            "7": 1
        }
    },
    {
        "question": "If the national debt were represented with a stack of $1 bills, how far would the stack reach?",
        "program": "PROGRAM:=Q1: What is the national debt?=Q2: What is the thickness of a single 1 dollar bill?=A1: 28000000000000=A2: 0.0043 in=Q2 -> A2 | F16=Q1 -> A1 | F9=P: Mul(Q1, Q2)",
        "answer": "1.2E+11 in",
        "context": "CONTEXT:=F1: The average force exerted while crushing a human skull is 2300 N=F2: It takes around 1 second to count a number=F3: The number of plant species in the world are 391000=F4: There are 60 minutes in an hour.=F5: Assuming the average volume of a single animal to be 7200 cc (90x40x2)=F6: There are 24 hours in a day.=F7: The average force exerted by releasing a rubber band is 10 N=F8: There are 60 seconds in a minute.=F9: The national debt is 28000000000000 USD=F10: There are 1000000 numbers in a million=F11: The limit of a planet size is 10x that of jupiter.=F12: The size of Jupiter is 1.4e+15 km cube.=F13: The height is 1.73 m=F14: The thickness of the connecting parts in a microchip is 0.9e-9 m=F15: The average thickness of a sheet of paper is 0.00008 m=F16: The thickness of a dollar bill is 0.0043 inches=F17: An average human inhales 6 liters of air every minute=F18: 60 minutes make up an hour.=F19: The average volume of a plant is 1570 cc (20cm height and 5cm radius)=F20: The number of animal species in the world are 7.7e+6",
        "fact_transform": {
            "8": 0,
            "15": 1
        }
    },
    {
        "question": "How much land would be needed if each family had a house and a yard?",
        "program": "PROGRAM:=Q1: How many families are there in the world?=Q2: How much land is required to build a house with a yard?=Q3: What is the total human population?=Q4: What is the average family size?=A1: 360 yard**2=A2: 7.2e+9=A3: 4=Q4 -> A3 | F19=Q3 -> A2 | F5=Q2 -> Div (Q3, Q4)=Q1 -> A1 | F2=P: Mul (Q1, Q2)",
        "answer": "6.48e+11 yard**2",
        "context": "CONTEXT:=F1: The size of Jupiter is 1.4e+15 km cube.=F2: Around 360 sq. yards is required to build a house with a yard.=F3: An average person's annual consumption of food is 1996 pounds=F4: The average volume of a plant is 1570 cc (20cm height and 5cm radius)=F5: The total human population is 7.2e+9=F6: The number of animal species in the world are 7.7e+6=F7: Assuming the average volume of a single animal to be 7200 cc (90x40x2)=F8: The mass of an average Clydesdale horse is 850 kg=F9: The circumference of the Earth is 1577756575 inches=F10: The average body height of a person is 170 cm.=F11: The average thickness of a sheet of paper is 0.00008 m=F12: An average farm produces around 52000 pounds of food each year.=F13: Ideal wingpsan length is 83% of the length of the flying body.=F14: The number of plant species in the world are 391000=F15: The length of a human and it's mass and linearly directly proportional to each other and the length of Donald Trump is 190 cm=F16: The length of a nerd rope is 12 inches=F17: The limit of a planet size is 10x that of jupiter.=F18: The mass of Donald Trump is 111 kg=F19: the average family size is 4=F20: The height is 1.73 m",
        "fact_transform": {
            "1": 0,
            "4": 1,
            "18": 2
        }
    },
    {
        "question": "How much shipwreck gold is at the bottom of the ocean?",
        "program": "PROGRAM:=Q1: How many shipwrecks are there under water currently?=Q2: What is the average gold present in a shipwreck?=A1: 3e+6=A2: $20000=Q2 -> A2 | F11=Q1 -> A1 | F13=P: Mul (Q1, Q2)",
        "answer": "$60e+9",
        "context": "CONTEXT:=F1: The total volume of the earth is 259875159532 cubic miles=F2: The mass of the rock is 2000 kg=F3: The number of atoms present in gold's nucleus is 197=F4: The average volume of a jar is 0.05 cubic metre=F5: The height at which the rock is falling from is 100m.=F6: The volume of a golf ball is 4e-5 km**3=F7: The weight of a normal egg is 60 g=F8: The acceleration due to gravity acting on the rock is 10m/s**2=F9: The density of a normal egg is 1.03 g/cc=F10: The density of a single water molecule is 4.156e+12 kg/cubic mile=F11: The average gold present in a shipwreck is 20000 USD=F12: The total volume of water molecules is 32000000 cubic miles=F13: There are a total of 3e+6 shipwrecks currently under water now.=F14: The density of gold is 19.3g/cc=F15: The total volume of the ocean cover is 300000000 cubic miles=F16: The density of gold atom is 19.32 g/cc=F17: The limit of a planet size is 10x that of jupiter.=F18: The size of Jupiter is 1.4e+15 km cube.=F19: The average volume of a penny is 0.00036 cubic metre=F20: The volume of the oceans is 1.3e+9 km**3",
        "fact_transform": {
            "12": 0,
            "10": 1
        }
    },
    {
        "question": "How many USA residents are legally prohibited from buying guns?",
        "program": "PROGRAM:=Q1: How many convicts and felons live in the US?=Q2: How many kids under 18 years are there in the US=A1: 5e+6=A2: 74.2e+6=Q2 -> A2 | F15=Q1 -> A1 | F14=P: Add (Q1, Q2)",
        "answer": "7.92E+07",
        "context": "CONTEXT:=F1: The average volume of a single gold ball is 40.672693 cubic cm=F2: The mass of an average Clydesdale horse is 850 kg=F3: It takes an average of 50 hp while applying brakes to stop the car from moving forward.=F4: Ideal wingpsan length is 83% of the length of the flying body.=F5: The average body height of a person is 170 cm.=F6: The weight of the person is 140 lb=F7: The total manufacturing cost to build a sailing frigate is 10e+5 USD (assumption)=F8: 6 pounds make up a single gallon of gasoline.=F9: The length of a human and it's mass and linearly directly proportional to each other and the length of Donald Trump is 190 cm=F10: An average car consumes about 656 gallons per year=F11: An average model rocket (drone), can carry 40 lbs.=F12: The force exerted by the car on the road by the virtue of gravity is 15000 N=F13: The force exerted by the wind travelling by metre per hour is 4.6e-4 N-hour/metre=F14: The number of felons and convicts in the US is around 5 million.=F15: 74.2e+6 under 18 kids are there in the USA=F16: The total raw materials cost to make a sailing frigate is 5e+6 USD (assumption)=F17: The fat equivalent of obese people in the country is 6336000000 pounds=F18: The limit of a planet size is 10x that of jupiter.=F19: The mass of Donald Trump is 111 kg=F20: The average volume of a suitcase is 75000 cubic cm",
        "fact_transform": {
            "13": 0,
            "14": 1
        }
    },
    {
        "question": "How much would the human skeleton weigh if it was made of iron?",
        "program": "PROGRAM:=Q1: What is the mass of the human skeleton?=Q2: What is the ratio of density of iron to calcium?=Q3: What is the density of iron?=Q4: What is the density of calcium?=A1: 12 kg=A2: 7.86 g*cm**-3=A3: 1.55 g*cm**-3=Q4 -> A3 | F4=Q3 -> A2 | F13=Q2 -> Div (Q3, Q4)=Q1 -> A1 | F7=P: Mul (Q1, Q2)",
        "answer": "60.8 kg",
        "context": "CONTEXT:=F1: The number of plant species in the world are 391000=F2: An average model rocket (drone), can carry 40 lbs.=F3: The limit of a planet size is 10x that of jupiter.=F4: The density of calcium is 1.55 g/cc=F5: The time interval between two full moons is 30 days=F6: Assuming the average volume of a single animal to be 7200 cc (90x40x2)=F7: The mass of human skeleton is 12 kgs=F8: The size of Jupiter is 1.4e+15 km cube.=F9: The number of animal species in the world are 7.7e+6=F10: The average gold present in a shipwreck is 20000 USD=F11: The height at which the rock is falling from is 100m.=F12: The acceleration due to gravity acting on the rock is 10m/s**2=F13: The density of iron is 7.86 g/cc=F14: It takes around 1 minute for the heat to peel off the skin.=F15: The mass of the rock is 2000 kg=F16: There are a total of 3e+6 shipwrecks currently under water now.=F17: There are 24 hours in a single day.=F18: The weight of the person is 140 lb=F19: The average volume of a plant is 1570 cc (20cm height and 5cm radius)=F20: The lungs and heart are 15 times deeper when compared to the skin.",
        "fact_transform": {
            "6": 0,
            "12": 1,
            "3": 2
        }
    },
    {
        "question": "On a global level, what is the ratio of the population of \"all top food chain animals\" to \"human population\"?",
        "program": "PROGRAM:=Q1: What is the total animal population in top food chains?=Q2: What is the total human population?=Q3: How many restaurants of top food chains are there in the world?=Q4: How many animal's worth meat is sold every day in top food chains?=A1: 7.2e+9=A2: 125000=A3: 300=Q4 -> A3 | F12=Q3 -> A2 | F6=Q2 -> Mul (Q3, Q4)=Q1 -> A1 | F8=P: Div (Q2, Q1)",
        "answer": "0.005",
        "context": "CONTEXT:=F1: We gain around 2200 cal walking around equator all day, naked.=F2: The number of plant species in the world are 391000=F3: The circumference of the Earth is 1577756575 inches=F4: The total number of people associated with CoronaVirus right now are 1.58e+6=F5: The mass of the corona virus in a patient's body is 50e-6 grams=F6: There are around 125000 restaurants of top food chains around the world.=F7: The volume occupied by a single molecule is 3e-23 metre cube=F8: The total human population is 7.2e+9=F9: An average person's annual consumption of food is 1996 pounds=F10: The rate of perspiration of leaves is 1.8 L/hour=F11: An average farm produces around 52000 pounds of food each year.=F12: Around 300 animals are killed each day to provide meat for the restaurant.=F13: The rate of perspiration of skin is 1.5 L/hour=F14: The number of animal species in the world are 7.7e+6=F15: The volume occupied by a single TiO2 pigment is 0.000001 metre cube=F16: Assuming the average volume of a single animal to be 7200 cc (90x40x2)=F17: The average volume of a plant is 1570 cc (20cm height and 5cm radius)=F18: The limit of a planet size is 10x that of jupiter.=F19: The length of a nerd rope is 12 inches=F20: The size of Jupiter is 1.4e+15 km cube.",
        "fact_transform": {
            "7": 0,
            "5": 1,
            "11": 2
        }
    },
    {
        "question": "How many golf balls can be fit in a typical suitcase?",
        "program": "PROGRAM:=Q1: What is the average volume of a single suitcase?=Q2: What is the average volume of a single golf ball?=A1: 75000 cm**3=A2: 40.6 cm**3=Q2 -> A2 | F10=Q1 -> A1 | F6=P: Div(Q1, Q2)",
        "answer": "1840",
        "context": "CONTEXT:=F1: An average model rocket (drone), can carry 40 lbs.=F2: The weight of the person is 140 lb=F3: The volume of a single Cessna 172 is 248 cubic metre=F4: The average body height of a person is 170 cm.=F5: The volume of a single post-it sheet is 0.007 cubic metre=F6: The average volume of a suitcase is 75000 cubic cm=F7: The average thickness of a sheet of paper is 0.00008 m=F8: The volume of the water cooler jug given is 5 gallon.=F9: The length of a nerd rope is 12 inches=F10: The average volume of a single gold ball is 40.672693 cubic cm=F11: The height is 1.73 m=F12: The limit of a planet size is 10x that of jupiter.=F13: The size of Jupiter is 1.4e+15 km cube.=F14: The number of calories burnt while climbing a step is 0.17 calories=F15: Ideal wingpsan length is 83% of the length of the flying body.=F16: The circumference of the Earth is 1577756575 inches=F17: The volume of a single golf ball is 0.01 gallon=F18: The amount of calories present in a chips bag is 1242.=F19: The thickness of the connecting parts in a microchip is 0.9e-9 m=F20: The thickness of an average atom is 0.3e-9 m",
        "fact_transform": {
            "5": 0,
            "9": 1
        }
    },
    {
        "question": "How much volume would 417234 loosely stacked cherries occupy?",
        "program": "PROGRAM:=Q1: How much volume does a single cherry occupy on an average?=Q2: How many cherries are loosely stacked.=A1: 4 cm**3=A2: 417234=Q2 -> A2 | F17=Q1 -> A1 | F20=P: Mul (Q1, Q2)",
        "answer": "1668936 cm**3",
        "context": "CONTEXT:=F1: There are 60 minutes in an hour.=F2: There are 1000000 numbers in a million=F3: The weight of the person is 140 lb=F4: The total number of people associated with CoronaVirus right now are 1.58e+6=F5: There are 60 seconds in a minute.=F6: It takes around 1 second to count a number=F7: The volume of a single post-it sheet is 0.007 cubic metre=F8: The thickness of the connecting parts in a microchip is 0.9e-9 m=F9: The size of Jupiter is 1.4e+15 km cube.=F10: The volume of a single Cessna 172 is 248 cubic metre=F11: The limit of a planet size is 10x that of jupiter.=F12: The height is 1.73 m=F13: The mass of the corona virus in a patient's body is 50e-6 grams=F14: The average thickness of a sheet of paper is 0.00008 m=F15: the average family size is 4=F16: There are 24 hours in a day.=F17: 417234 cherries are going to be loosely stacked.=F18: The thickness of an average atom is 0.3e-9 m=F19: An average model rocket (drone), can carry 40 lbs.=F20: The average volume of a single cherry is 4.1 cc.",
        "fact_transform": {
            "19": 0,
            "16": 1
        }
    },
    {
        "question": "How many grams of steam are needed to melt a cubic foot of ice?",
        "program": "PROGRAM:=Q1: What is the weight equivalent of one cubic foot of ice?=Q2: How many grams of ice can 1 gram of steam melt?=A1: 28300 g=A2: 8 g=Q2 -> A2 | F4=Q1 -> A1 | F18=P: Div (Q1, Q2)",
        "answer": "3537",
        "context": "CONTEXT:=F1: The cube of the radius of earth is radius powered to 3=F2: The weight of the person is 140 lb=F3: 1 cubic centimeter makes up 1 cc=F4: The density of earth is 5.5e+12 kg per cubic cm=F5: Around 1e+9 cans are made every day.=F6: The average volume of a penny is 0.00036 cubic metre=F7: The surface area of the pipe is 0.75 times the diameter square.=F8: The average mass of a mouse is 0.02 kg=F9: 170g of CO2 is there in a can of soda.=F10: There are 24 hours in a day.=F11: 60 minutes make up an hour.=F12: The volume of a single red blood cell is 87e-12 cc=F13: The average volume of a jar is 0.05 cubic metre=F14: The volume of a sphere is 4 times the radius cube.=F15: The diameter of the pipe is 0.001 miles=F16: An average human inhales 6 liters of air every minute=F17: The radius of Earth is 4000 miles=F18: The weight equivalent of one cubic foot of ice is 28300 gm=F19: The total volume of water in the oceans is 321000000 cubic miles=F20: An average model rocket (drone), can carry 40 lbs.",
        "fact_transform": {
            "17": 0,
            "3": 1
        }
    },
    {
        "question": "How many ants would fit in to The Shard?",
        "program": "PROGRAM:=Q1: What is the total volume of The Shard?=Q2: What is the total volume of an ant?=Q3: What is the surface area of The Shard?=Q4: What is the height of The Shard?=A1: 1e-8 m**3=A2: 398490 m**2=A3: 244m=Q4 -> A3 | F15=Q3 -> A2 | F4=Q1 -> Mul (Q3, Q4)=Q2 -> A1 | F12=P: Div (Q1, Q2)",
        "answer": "9.70E+15",
        "context": "CONTEXT:=F1: The thickness of an average atom is 0.3e-9 m=F2: Surface area of toilet paper roll is 88 sq. in=F3: A typical US School has 516 students.=F4: The surface area of The Shard is 398490 sq. metre=F5: There are an average of 450 toilet paper rolls as back-up stock in a school.=F6: The minimum size visible to a human is 1e-4 m=F7: The height is 1.73 m=F8: The average mass of a mouse is 0.02 kg=F9: The thickness of the connecting parts in a microchip is 0.9e-9 m=F10: The average speed at which a bee flies is 15 miles per hour=F11: Number of toilet paper rolls in a lavatory is 1.=F12: The volume of an ant is 1e-8 metre cube=F13: The limit of a planet size is 10x that of jupiter.=F14: The bee flies for a total of around 4 hours each day.=F15: The height of a Shard is 244 metres=F16: 1 lavatory for 40 students as per K-12 Toilet Requirement Summary by CDE.=F17: The size of Jupiter is 1.4e+15 km cube.=F18: The average thickness of a sheet of paper is 0.00008 m=F19: The normal size of a cell is 1e-6 m=F20: The mass of a maus tank is 170551 kg",
        "fact_transform": {
            "11": 0,
            "3": 1,
            "14": 2
        }
    },
    {
        "question": "How many atoms thick are the connecting paths inside a micro chip?",
        "program": "PROGRAM:=Q1: What is the thickness of the connecting parts in a microchip?=Q2: What is the thickness of an average atom?=A1: 0.9e-9 m=A2: 0.3e-9 m=Q2 -> A2 | F19=Q1 -> A1 | F17=P: Div (Q1, Q2)",
        "answer": "3",
        "context": "CONTEXT:=F1: The average force exerted by releasing a rubber band is 10 N=F2: The average force exerted while crushing a human skull is 2300 N=F3: The amount of calories present in a chips bag is 1242.=F4: The weight of the person is 140 lb=F5: The length of a nerd rope is 12 inches=F6: The height is 1.73 m=F7: The circumference of the Earth is 1577756575 inches=F8: The time interval between two full moons is 30 days=F9: The normal size of a cell is 1e-6 m=F10: The mass of the corona virus in a patient's body is 50e-6 grams=F11: The number of calories burnt while climbing a step is 0.17 calories=F12: The total number of people associated with CoronaVirus right now are 1.58e+6=F13: The size of Jupiter is 1.4e+15 km cube.=F14: The average thickness of a sheet of paper is 0.00008 m=F15: The speed of light in kmph is 1.079e+9 kmph=F16: The limit of a planet size is 10x that of jupiter.=F17: The thickness of the connecting parts in a microchip is 0.9e-9 m=F18: An average model rocket (drone), can carry 40 lbs.=F19: The thickness of an average atom is 0.3e-9 m=F20: The minimum size visible to a human is 1e-4 m",
        "fact_transform": {
            "16": 0,
            "18": 1
        }
    },
    {
        "question": "My barber has been cutting hair for 55 years. How many miles of hair has he cut?",
        "program": "PROGRAM:=Q1: What is the length of hair cut in a single year?=Q2: For how many years, has the barber been cutting my hair?=Q3: What is the average length of hair cut in a single haircut?=Q4: How many times does one visit the barber in a year for a haircut?=Q5: How many hairs do we have on an average?=Q6: What is the average length of hair cut in a haircut>=A1: 55=A2: 12=A3: 100000=A4: 1.8e-5 miles=Q6 -> A4 | F1=Q5 -> A3 | F7=Q3 -> Mul (Q5, Q6)=Q4 -> A2 | F15=Q1 -> Mul (Q3, Q4)=Q2 -> A1 | F5=P: Mul (Q1, Q2)",
        "answer": "1188 miles",
        "context": "CONTEXT:=F1: There are around 100000 hairs on our head.=F2: The mass of Donald Trump is 111 kg=F3: It takes around 1 minute for the heat to peel off the skin.=F4: An average farm produces around 52000 pounds of food each year.=F5: The barber has been cutting the hair for 55 years.=F6: The time interval between two full moons is 30 days=F7: An average of 12 visits is observed for haircuts in a year.=F8: Around 360 sq. yards is required to build a house with a yard.=F9: An average person's annual consumption of food is 1996 pounds=F10: The mass of an average Clydesdale horse is 850 kg=F11: The lungs and heart are 15 times deeper when compared to the skin.=F12: The speed at which Earth moves is 1656 kmph=F13: The total human population is 7.2e+9=F14: The height is 1.73 m=F15: The height of the ceiling in the restaurant is 32 feet.=F16: There are 24 hours in a day.=F17: The average length of hair cut in a single haircut is 1.8e-5 miles=F18: There are 24 hours in a single day.=F19: The length of a human and it's mass and linearly directly proportional to each other and the length of Donald Trump is 190 cm=F20: the average family size is 4",
        "fact_transform": {
            "4": 0,
            "14": 1,
            "6": 2,
            "0": 3,
            "16": 4
        }
    },
    {
        "question": "How many softballs are produced annually?",
        "program": "PROGRAM:=Q1: How many softballs are produced daily?=Q2: How many working days are there in a year?=A1: 7000=A2: 261=Q2 -> A2 | F18=Q1 -> A1 | F2=P: Mul (Q1, Q2)",
        "answer": "1.80E+06",
        "context": "CONTEXT:=F1: An average coin minting facility is 120 years old.=F2: Around 7000 softballs are produced daily. (Assumption)=F3: There are around 250 coin minting facilities in the world.=F4: An average intake of freshman at a university is 550=F5: The new combinations possible with the three digit code are 1000.=F6: The average length of a pickle is around 18 cm.=F7: The number of universities in the US is 5300=F8: The volume of an ant is 1e-8 metre cube=F9: The average speed at which a bee flies is 15 miles per hour=F10: The surface area of The Shard is 398490 sq. metre=F11: There are 60 minutes in an hour.=F12: The time interval between two full moons is 30 days=F13: There are 24 hours in a day.=F14: The bee flies for a total of around 4 hours each day.=F15: The height of a Shard is 244 metres=F16: The number of original combinations before were 1e+7=F17: An average of 1e+8 coins are minted each year by a facility.=F18: There are 261 working days in a year.=F19: There are 1000000 numbers in a million=F20: Around 245e+6 pickles are sold in the US every year.",
        "fact_transform": {
            "1": 0,
            "17": 1
        }
    },
    {
        "question": "For the United States, how many cars would have their fuel needs met for one year by the fat contained by all obese people?",
        "program": "PROGRAM:=Q1: What is the total gasoline consumption by a single car for over a year?=Q2: If a gram of fat delivers the same energy content as a gram of gasoline, how many gallons of gasoline are equivalent to the fat carried by the obese people in this country?=Q3: What is the fat equivalent of overweight people in the country?=Q4: How many pounds make up a single pound of gasoline?=A1: 6336000000 pounds=A2: 6 pounds/gallon=A3: 656 gallons=Q4 -> A2 | F12=Q3 -> A1 | F3=Q1 -> Div (Q3, Q4)=Q2 -> A3 | F5=P: Div (Q1, Q2)",
        "answer": "1609756",
        "context": "CONTEXT:=F1: It takes around 1 second to count a number=F2: It takes an average of 50 hp while applying brakes to stop the car from moving forward.=F3: The fat equivalent of obese people in the country is 6336000000 pounds=F4: An average model rocket (drone), can carry 40 lbs.=F5: An average car consumes about 656 gallons per year=F6: The volume of a golf ball is 4e-5 km**3=F7: The volume of the oceans is 1.3e+9 km**3=F8: The weight of the person is 140 lb=F9: Ideal wingpsan length is 83% of the length of the flying body.=F10: The height is 1.73 m=F11: The force exerted by the car on the road by the virtue of gravity is 15000 N=F12: 6 pounds make up a single gallon of gasoline.=F13: The number of calories burnt while climbing a step is 0.17 calories=F14: The amount of calories present in a chips bag is 1242.=F15: There are 1000000 numbers in a million=F16: There are 24 hours in a day.=F17: There are 60 seconds in a minute.=F18: The force exerted by the wind travelling by metre per hour is 4.6e-4 N-hour/metre=F19: There are 60 minutes in an hour.=F20: The average body height of a person is 170 cm.",
        "fact_transform": {
            "2": 0,
            "11": 1,
            "4": 2
        }
    },
    {
        "question": "How long does it take for a human body to burn at the stake?",
        "program": "PROGRAM:=Q1: How long does it take for the burns to peel off the skin?=Q2: How deep is the heart and lungs of our body compared to the skin?=A1: 1 min=A2: 15=Q2 -> A2 | F17=Q1 -> A1 | F20=P: Mul (Q1, Q2)",
        "answer": "15 min",
        "context": "CONTEXT:=F1: There are 1000000 numbers in a million=F2: The height is 1.73 m=F3: Ideal wingpsan length is 83% of the length of the flying body.=F4: An average model rocket (drone), can carry 40 lbs.=F5: The size of Jupiter is 1.4e+15 km cube.=F6: The limit of a planet size is 10x that of jupiter.=F7: There are 24 hours in a day.=F8: The speed at which Earth moves is 1656 kmph=F9: The average sleep quantity of a person is 8 hours=F10: There are 365 days in a year.=F11: The weight of the person is 140 lb=F12: The average body height of a person is 170 cm.=F13: There are 24 hours in a single day.=F14: It takes around 1 second to count a number=F15: There are 60 seconds in a minute.=F16: The average thickness of a sheet of paper is 0.00008 m=F17: The lungs and heart are 15 times deeper when compared to the skin.=F18: There are 60 minutes in an hour.=F19: The time interval between two full moons is 30 days=F20: It takes around 1 minute for the heat to peel off the skin.",
        "fact_transform": {
            "19": 0,
            "16": 1
        }
    },
    {
        "question": "What is the mass of air in a room?",
        "program": "PROGRAM:=Q1: What is the volume of a typical room?=Q2: What is the density of air around us?=A1: 60 m**3=A2: 1.3 kg/m**3=Q2 -> A2 | F13=Q1 -> A1 | F17=P: Mul (Q1, Q2)",
        "answer": "78 kg",
        "context": "CONTEXT:=F1: There are a total of 40 balls in the school, 10 of each sport.=F2: An average human inhales 6 liters of air every minute=F3: The weight of the person is 140 lb=F4: Ideal wingpsan length is 83% of the length of the flying body.=F5: The force exerted by the car on the road by the virtue of gravity is 15000 N=F6: The average body height of a person is 170 cm.=F7: An average model rocket (drone), can carry 40 lbs.=F8: There are 24 hours in a day.=F9: The minimum size visible to a human is 1e-4 m=F10: The normal size of a cell is 1e-6 m=F11: It takes an average of 50 hp while applying brakes to stop the car from moving forward.=F12: The total canary population in the world is 100000=F13: The density of air is 1.3 kg/metre cube=F14: The force exerted by the wind travelling by metre per hour is 4.6e-4 N-hour/metre=F15: The average thickness of a sheet of paper is 0.00008 m=F16: 60 minutes make up an hour.=F17: The volume of a typical room is 60 metre cube=F18: The height is 1.73 m=F19: The average air present inside these balls is 0.8 atmospheres of air.=F20: Around 33 percent of canaries are flying right now.",
        "fact_transform": {
            "16": 0,
            "12": 1
        }
    },
    {
        "question": "How many illiterate people are there in India?",
        "program": "PROGRAM:=Q1: What is the population of India?=Q2: What is the illiteracy rate in India?=A1: 1360000000=A2: 0.26=Q2 -> A2 | F4=Q1 -> A1 | F15=P: Mul (Q1, Q2)",
        "answer": "353600000",
        "context": "CONTEXT:=F1: The average mass of a child is 25 kg.=F2: The total land area on Earth is 501e+6 km square=F3: There are 24 hours in a day.=F4: The illiteracy rate in India is 26%=F5: The size of Jupiter is 1.4e+15 km cube.=F6: There are 1000000 numbers in a million=F7: The amount of calories present in a chips bag is 1242.=F8: The limit of a planet size is 10x that of jupiter.=F9: The time interval between two full moons is 30 days=F10: The surface area of The Shard is 398490 sq. metre=F11: There are 60 seconds in a minute.=F12: The minimum size visible to a human is 1e-4 m=F13: The height of a Shard is 244 metres=F14: There are 60 minutes in an hour.=F15: The population of India is 1360000000=F16: The volume of an ant is 1e-8 metre cube=F17: The number of calories burnt while climbing a step is 0.17 calories=F18: The average mass of an Elephant is 4200 kg.=F19: It takes around 1 second to count a number=F20: The normal size of a cell is 1e-6 m",
        "fact_transform": {
            "14": 0,
            "3": 1
        }
    },
    {
        "question": "How many graduates, people holding first university degrees, do we produce in our country?",
        "program": "PROGRAM:=Q1: How many universities are there in the USA?=Q2: What is the average freshman intake of a university in the USA?=A1: 5300=A2: 550=Q2 -> A2 | F17=Q1 -> A1 | F3=P: Mul (Q1, Q2)",
        "answer": "5.20E+06",
        "context": "CONTEXT:=F1: There are 60 seconds in a minute.=F2: The height is 1.73 m=F3: The number of universities in the US is 5300=F4: The total human population is 7.2e+9=F5: The average thickness of a sheet of paper is 0.00008 m=F6: It takes around 1 second to count a number=F7: The time interval between two full moons is 30 days=F8: Around 360 sq. yards is required to build a house with a yard.=F9: There are 24 hours in a day.=F10: The limit of a planet size is 10x that of jupiter.=F11: The total land area on Earth is 501e+6 km square=F12: The population given is 1e+6=F13: There are 1000000 numbers in a million=F14: The size of Jupiter is 1.4e+15 km cube.=F15: Considering people to be in the midpoint of their areas (assuming to be squares), so they have to travel the length of their square to reach another person.=F16: the average family size is 4=F17: An average intake of freshman at a university is 550=F18: There are 60 minutes in an hour.=F19: An average person's annual consumption of food is 1996 pounds=F20: An average farm produces around 52000 pounds of food each year.",
        "fact_transform": {
            "2": 0,
            "16": 1
        }
    },
    {
        "question": "How many gallons of water in the Atlantic ocean?",
        "program": "PROGRAM:=Q1: What fraction of the oceans does the Atlantic ocean account for?=Q2: How many gallons of water are present in all of the oceans?=A1: 0.23=A2: 3.52e+20=Q2 -> A2 | F16=Q1 -> A1 | F8=P: Mul (Q2, Q1)",
        "answer": "8.00E+19",
        "context": "CONTEXT:=F1: The density of a single water molecule is 4.156e+12 kg/cubic mile=F2: The total volume of the earth is 259875159532 cubic miles=F3: The population of US is 348200000=F4: The total volume of water molecules is 32000000 cubic miles=F5: An average American, buys 12 books each year.=F6: The cube of the radius of earth is radius powered to 3=F7: An average coin minting facility is 120 years old.=F8: The fraction of the oceans that the Atlantic ocean accounts for is 23%=F9: Each significantly big cloud, contains about 192000 km**3 of water in it.=F10: The total water present on earth is 1.38e+9 km**3=F11: There are around 250 coin minting facilities in the world.=F12: The radius of Earth is 4000 miles=F13: The total water present in an average human is 3.7e-11 km**3=F14: The total volume of the ocean cover is 300000000 cubic miles=F15: The volume of a sphere is 4 times the radius cube.=F16: 3.52e+20 gallons of water is present in all oceans=F17: The volume of the oceans is 1.3e+9 km**3=F18: An average of 1e+8 coins are minted each year by a facility.=F19: The volume of a golf ball is 4e-5 km**3=F20: There are around 1000 significantly big clouds in the sky.",
        "fact_transform": {
            "7": 0,
            "15": 1
        }
    },
    {
        "question": "How much electricity would one need to stop a car from moving forward?",
        "program": "PROGRAM:=A1: 50 hp=P: A1 | F4",
        "answer": "50 hp",
        "context": "CONTEXT:=F1: The speed of light in kmph is 1.079e+9 kmph=F2: It costs about 100 USD to fly the drone for a sq.km.=F3: The average body height of a person is 170 cm.=F4: It takes an average of 50 hp while applying brakes to stop the car from moving forward.=F5: An average car consumes about 656 gallons per year=F6: The fat equivalent of obese people in the country is 6336000000 pounds=F7: The force exerted by the car on the road by the virtue of gravity is 15000 N=F8: The weight of the person is 140 lb=F9: There are 24 hours in a single day.=F10: The total habitable land in the world is 6070285 km=F11: There are 24 hours in a day.=F12: The number of calories burnt while climbing a step is 0.17 calories=F13: The force exerted by the wind travelling by metre per hour is 4.6e-4 N-hour/metre=F14: The time interval between two full moons is 30 days=F15: 6 pounds make up a single gallon of gasoline.=F16: The amount of calories present in a chips bag is 1242.=F17: An average model rocket (drone), can carry 40 lbs.=F18: Ideal wingpsan length is 83% of the length of the flying body.=F19: The length of a nerd rope is 12 inches=F20: The circumference of the Earth is 1577756575 inches",
        "fact_transform": {
            "3": 0
        }
    },
    {
        "question": "If the top 10 Forbes businesses donated 10% of their annual proceeds to schools, how much money would each school in the US receive?",
        "program": "PROGRAM:=Q1: What is the collective 10% wealth of top 10 billionaires?=Q2: How many schools are there in the US?=Q3: What is total wealth of top 10 billionaires on Forbes=Q4: What is the percentage of their wealth being donated?=A1: 130930=A2: $1153000000000=A3: 0.1=Q4 -> A3 | F11=Q3 -> A2 | F18=Q1 -> Mul (Q3, Q4)=Q2 -> A1 | F4=P: Div (Q1, Q2)",
        "answer": "$880623",
        "context": "CONTEXT:=F1: The fat equivalent of obese people in the country is 6336000000 pounds=F2: An average American, buys 12 books each year.=F3: There are 1000000 numbers in a million=F4: There are 130930 schools in the US.=F5: The average temperature of a tropical area is 26 degree celsius.=F6: An average car consumes about 656 gallons per year=F7: An average temperature of Arizona is 35 degree celsius=F8: 6 pounds make up a single gallon of gasoline.=F9: 1 mL heated with 4.1 J can change the temperature by 1 degree celsius.=F10: The amount of calories present in a chips bag is 1242.=F11: The percentage of wealth being donated is 10 %=F12: There are 60 seconds in a minute.=F13: The average length of a pickle is around 18 cm.=F14: The number of calories burnt while climbing a step is 0.17 calories=F15: There are 60 minutes in an hour.=F16: It takes around 1 second to count a number=F17: Around 245e+6 pickles are sold in the US every year.=F18: The total wealth of top 10 billionaires is around 1153 Billion USD=F19: There are 24 hours in a day.=F20: The population of US is 348200000",
        "fact_transform": {
            "3": 0,
            "17": 1,
            "10": 2
        }
    },
    {
        "question": "How much air would it take to fill all of the school's basketballs, soccer balls, and volleyballs?",
        "program": "PROGRAM:=Q1: How much air is present on an average inside a basketball/football/volleyball/soccerball=Q2: How many balls do we have in total in the school?=A1: 0.8 atm=A2: 40=Q2 -> A2 | F17=Q1 -> A1 | F13=P: Mul (Q1, Q2)",
        "answer": "32 atm",
        "context": "CONTEXT:=F1: The volume of the oceans is 1.3e+9 km**3=F2: It takes around 1 second to count a number=F3: The average thickness of a sheet of paper is 0.00008 m=F4: There are around 1000 significantly big clouds in the sky.=F5: The volume of a typical room is 60 metre cube=F6: There are 365 days in a year.=F7: 60 minutes make up an hour.=F8: The minimum size visible to a human is 1e-4 m=F9: There are 60 seconds in a minute.=F10: There are 60 minutes in an hour.=F11: There are 24 hours in a day.=F12: The height is 1.73 m=F13: The average air present inside these balls is 0.8 atmospheres of air.=F14: There are 1000000 numbers in a million=F15: The volume of a golf ball is 4e-5 km**3=F16: The density of air is 1.3 kg/metre cube=F17: There are a total of 40 balls in the school, 10 of each sport.=F18: An average human inhales 6 liters of air every minute=F19: Each significantly big cloud, contains about 192000 km**3 of water in it.=F20: The normal size of a cell is 1e-6 m",
        "fact_transform": {
            "12": 0,
            "16": 1
        }
    }
]

