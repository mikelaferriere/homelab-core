'use strict'

import { createLogger, transports, format, Logger } from 'winston'
import LokiTransport from 'winston-loki'
import { LogLevel, ServiceConfiguration } from './types/service'

const configure = ({
  serviceName,
  host,
  minLogLevel = LogLevel.Debug,
}: ServiceConfiguration): Logger => {

  const consoleTransport = new transports.Console({
    format: format.combine(
      format.metadata(),
      format.timestamp(),
      format.colorize(),
      format.printf(({ timestamp, level, message, metadata }) => {
        return `[${timestamp}] ${level}: ${message}. ${JSON.stringify(
          metadata
        )}`
      })
    ),
  })

  const lokiTransport = new LokiTransport({
    host: `${host}:3100`,
    labels: { app: serviceName },
    json: true,
    replaceTimestamp: true,
    onConnectionError: console.error,
  })

  return createLogger({
    level: String(minLogLevel),
    transports: [consoleTransport, lokiTransport],
  })
}

export const getLogger = (configuration: ServiceConfiguration): Logger => {
  return configure(configuration)
}
