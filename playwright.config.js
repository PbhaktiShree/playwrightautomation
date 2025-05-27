// @ts-check
import { defineConfig, devices } from '@playwright/test';


const config=({
  testDir:'./tests',
  timeout: 40*1000,
  expect:{
    timeout: 40*1000,
  },
  reporter:'html',
  use: {
    browserName:'chromium',
    headless: false,      // 👈 show browser window
    //slowMo: 1000,
    screenshot:'on', //https://trace.playwright.dev/ lectture 25
    //trace:'on'
    trace:'retain-on-failure' //give screenshort on fail the test case lectture 25
  },

  
});

module.exports= config;
