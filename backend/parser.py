import json
inputFile = open('placeholder.txt','r')

columns = inputFile.readline().strip().split(',')
print(columns)


data_dict = {}

for i in columns:
    data_dict[i] = []

nextline = inputFile.readline().strip().split(',')
while nextline != '':
    for i, value in enumerate(nextline):
        if not i >= len(columns):
            data_dict[columns[i]].append(nextline[i])
            print(data_dict)
    nextline = inputFile.readline().strip().split(',')
print(data_dict)
with open("data_file.json", "w") as write_file:
    json.dump(data_dict, write_file)