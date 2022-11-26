from os import scandir

fileObjString = "var fileNames = ["

for obj in scandir("intros/"):
    if not obj.is_dir():
        md_file = open(f"intros/{obj.name}")
        fileObjString += f"{{name: `{obj.name}`, content:`{md_file.read()}`}},"
        md_file.close()

fileObjString += "] \n\n"
f_init = open("index_init.js")
c = f_init.read()
f_init.close()
f = open("index.js", "w")
f.write(fileObjString + c)
f.close()
