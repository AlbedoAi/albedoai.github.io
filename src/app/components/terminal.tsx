"use client";
import React, { useEffect} from "react";
import $ from 'jquery';
import 'jquery.terminal';
import 'jquery.terminal/css/jquery.terminal.css';
import './Terminal.module.css'
export default function Terminal() {
    useEffect(() => {
      $('#terminal').terminal(function(command, terminal) {


    }, );
    },);

    return (
      <div>
        <div id="terminal"></div>
      </div>
    );
  }
