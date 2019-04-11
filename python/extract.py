import tabula
import sys
import os

fileURL = sys.argv[1]
relarea = sys.argv[-5: -1]
page = sys.argv[-1]

# print(fileURL, relarea, page, sep="\n")

x_co = sorted([relarea[0], relarea[2]])
y_co = sorted([relarea[1], relarea[3]])

areaparams = [y_co[0], x_co[0], y_co[1], x_co[1]]
# print(x_co)
# print(y_co)
df = tabula.read_pdf(fileURL, pages = page, relative_area = True, area = areaparams)
# print(df)
df.to_csv(os.getcwd() + '/extras/tmp.csv', sep =",")
print('Done', end = '')