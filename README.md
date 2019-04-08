# Xtract

Xtract is a GUI that helps in parsing structured tabular data from PDF files into CSV format.

### Tech Stack

- [Electron](https://electronjs.org/) - Javascript library to build cross-platform desktop application
- [Tabula-py](https://github.com/chezou/tabula-py) - A framework to parse PDF data to Pandas Data Frame
- [OpenCV](https://opencv.org/) - Computer Vision library. Included in project to parse graphs

Numpy and Pandas are used to handle data within the Python ecosystem.

### Build the Application

In order to buid the application one would require the latest version of node and npm. Version details can be found in package.json.

Currently, we support only Linux due to limitations of child process in certain Windows environment. To build the project on your local machine, use the following commands:

```bash
git clone https://github.com/Kriyszig/xtract.git
cd xtract
npm install
npm start
```

Official packaged software will be available once we move out of WIP stage.

### [WIP]

Contributions are welcome. Please make sure all the files added are placed in correct folder. For Python scripts, place your script in python directory - `./python/`. If the directory doesn't exit, please create one. 
