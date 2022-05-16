import os.path
import json
import os

files = []
directory = "C:/path/to/folder"
for filename in os.listdir(directory):
    f = os.path.join(directory, filename)
    if os.path.isfile(f):
        f = f.split("\\")
        file_name = f[1]
        files.append(file_name)


path = "C:/path/to/src"
name = "fileNamesList.json"
json_file_name = os.path.join(path, name)
with open(json_file_name, "w") as outfile:
        json.dump(files, outfile, ensure_ascii=False)
