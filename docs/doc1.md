---
id: doc1
title: Installation
sidebar_label: Installation
slug: /
---

## Install Myze Shop UI Kit template, the world's best React Native UI Kit for online store.

First you have to choose between two version of projects provided in main directory.
One with navigation (`Myze shop screens without navigation`) and other (`Myze shop store showcase`) without it. 
The main difference lays in navigation. First one has most basic navigation which is better for you if you want to make navigation by yourself.
Second one is already made with ready to use navigation config. When you choose just unzip containg file.

## Setting up environment

Make sure you have React Native environment properly set up. Go to React Native docs for reference. https://reactnative.dev/docs/environment-setup
and click on `React Native CLI Quickstart` tab.

## Installing dependencies

To install dependencies go to main project directory in terminal and run:

```javascript
// with npm
npm i

// with yarn
yarn
```

Then if you are on Mac install other dependencies

```
npx pod-install
```

## Running simulators

After installing all the dependencies you can run app on simulator
```
yarn start
```
in on terminal and in another run 
```
// for ios
yarn ios
// for android
yarn android
```

:::caution
If you have any problems with commands above there is probably something wrong with your React Native environment.
:::