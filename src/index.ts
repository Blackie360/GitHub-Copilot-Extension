import { Hono } from 'hono'
import { serve } from '@hono/node-server';
import { Octokit } from "@octokit/core";
import {
  createAckEvent,
  createDoneEvent,
  createErrorsEvent,
  createTextEvent,
  getUserMessage,
  verifyAndParseRequest,
} from "@copilot-extensions/preview-sdk";

const app = new Hono();