import json

with open("data.json", "r") as file:
    data = json.load(file)

final = []
# THIS WAS JUST A TEST DONT WORRY ABOUT IT

for i, each in enumerate(data):
    if "Members" not in each:
        each["Members"] = [
            {
                "member": each["Member"],
                "Date tabled": each["Date tabled"],
                "Date of response": each["Date of response"]
            }
        ]

    final.append({
        "no": each["No."],
        "title": each["Title"],
        "members": each["Members"]
    })

with open("final.json", "w") as newfile: 
    json.dump(final, newfile, indent=2)
