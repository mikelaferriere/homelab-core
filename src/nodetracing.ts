'use strict'

import { KoaInstrumentation } from '@opentelemetry/instrumentation-koa'
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http'

import api from '@opentelemetry/api'
import { registerInstrumentations } from '@opentelemetry/instrumentation'
import { NodeTracerProvider, SpanExporter } from '@opentelemetry/sdk-trace-node'
import { SimpleSpanProcessor } from '@opentelemetry/sdk-trace-base'
import { JaegerExporter } from '@opentelemetry/exporter-jaeger'
import { WinstonInstrumentation } from '@opentelemetry/instrumentation-winston'
import { LogLevel, ServiceConfiguration } from './types/service'

export const configure = ({
  serviceName,
  host,
}: ServiceConfiguration) => {
  const provider = new NodeTracerProvider()

  const jaegerExporter = new JaegerExporter({
    tags: [
      {
        key: 'serviceName',
        value: serviceName,
      },
    ],
    endpoint: `${host}:14268/api/traces`,
  })

  provider.addSpanProcessor(
    new SimpleSpanProcessor(jaegerExporter as SpanExporter)
  )

  // Initialize the OpenTelemetry APIs to use the NodeTracerProvider bindings
  provider.register()

  registerInstrumentations({
    instrumentations: [
      new KoaInstrumentation(),
      new HttpInstrumentation(),
      new WinstonInstrumentation({
        enabled: true,
        logHook: (_span, record: { [x: string]: string }) => {
          record['service.name'] = serviceName
          record['app'] = serviceName
        },
      }),
    ],
    tracerProvider: provider,
  })

  return api.trace.getTracer(serviceName)
}
