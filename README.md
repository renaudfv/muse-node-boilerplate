# muse-node-boilerplate

## Prerequisite
This project needs Node.js and Muse-io installed on your computer to work.

> [Download and install the Muse developper Research tools.](http://developer.choosemuse.com/research-tools/getting-started)

> [Download and install Node.js.](https://nodejs.org/)

___

## Setup
Node.js is installed with the *npm* command-line tool. It stands for *node package manager* and will be helpfull to install other pacakges and install the modules referenced by this project.

```
$ git clone https://github.com/renaudfv/muse-node-boilerplate.git
$ cd muse-node-boilerplate
$ npm install
```

### To run the projet  
#### Run muse io with dsp/raw eeg presets on port 5000
```
$ muse-io --osc osc.udp://localhost:5000 --preset 14 --dsp
```
#### In a separete process run the Node.js program
```
$ node server.js
```
___
## Content

In *server.js*, an [OSC server](https://github.com/TheAlphaNerd/node-osc) is started and listens to the local IP adress on port 5000 for the */muse/eeg* OSC path which gets the raw eeg data. Please refer to the [Muse Research Tools Availible Data documentation](http://developer.choosemuse.com/research-tools/available-data) for other usefull paths *(fft, blink, clench, elements, etc.)*.
___
## Ressources
These links list tools that you might want to look at for further developpement.
> [**Express.js** is a super simple HTTP server framework for Node.js](http://expressjs.com)

> [**Socket.io** is a real-time HTTP engine usefull for sending data between the client and server.](http://socket.io)

> [**D3.js** is a client-side data visualisation library.](https://d3js.org)
