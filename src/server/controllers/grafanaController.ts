/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { NextFunction, RequestHandler, Request, Response } from 'express';
import { RequestBodyConnect } from '../../types/types';
import { dashBoardHelper } from './dashBoardHelper';

type GrafanaController = {
  grafanaFetch: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
  createDataSource: (
    req: Request,
    res: Response,
    next: NextFunction
  ) => Promise<void>;
  createDashBoard: RequestHandler;
};

const grafanaController: GrafanaController = {
  createDataSource: async (req: Request, res: Response, next: NextFunction) => {
    const {
      graf_name,
      graf_pass,
      graf_port,
      db_name,
      db_url,
      db_username,
      db_server,
      db_password,
    } = req.body;
    const url = `http://localhost:${graf_port}/api/datasources`;

    const body = {
      orgId: 1,
      name: `${db_name}`,
      type: 'postgres',
      typeLogoUrl: 'asd',
      access: 'proxy',
      url: `${db_url}`,
      user: `${db_username}`,
      database: `${db_server}`,
      basicAuth: false,
      basicAuthUser: `${graf_name}`,
      withCredentials: false,
      isDefault: false,
      jsonData: {
        maxOpenConns: 100,
        maxIdleConns: 100,
        maxIdleConnsAuto: true,
        connMaxLifetime: 14400,
        database: 'grafana',
        sslmode: 'disable',
        postgresVersion: 1500,
      },
      secureJsonFields: {},
      version: 2,
      readOnly: false,
      secureJsonData: {
        password: `${db_password}`,
      },
    };

    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Basic ${Buffer.from(`${graf_name}:${graf_pass}`).toString(
        'base64'
      )}`,
    };

    const payload = {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body),
    };

    console.log('payload', payload);

    try {
      const response = await fetch(url, payload);
      console.log('response', response);
      const data = await response.json();
      return next();
    } catch (e) {
      console.log('Error', e);
      throw e;
      return;
    }

    // console.log("graf_name:", graf_name);
    // console.log("graf_pass:", graf_pass);
    // console.log("graf_port:", graf_port);
    // console.log("db_name:", db_name);
    // console.log("db_url:", db_url);
    // console.log("db_username:", db_username);
    // console.log("db_server:", db_server);
    // console.log("db_password:", db_password);
    // console.log('url:', url)

    // const config = {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     Authorization: `Basic ${Buffer.from(`${graf_name}:${graf_pass}`).toString('base64')}`,
    // "Connection" : "keep-alive",
    // "Access-Control-Allow-Origin": "*",
    // 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    // "Access-Control-Allow-Credentials": "true"
    //   },
    //   body: {
    //     name: `${db_name}`,
    //     type: 'postgres',
    //     url: `${db_url}`,
    //     user: `${db_username}`,
    //     access: 'proxy',
    //     database: `${db_server}`,
    //     secureJsonData: {
    //       password: `${db_password}`
    //       },
    //     basicAuth: false
    //   }
    // };

    // console.log('config:', config)

    // try {
    //   const response = await fetch(url, config);

    // if (!response.ok) {
    //   const message = `An error has occured: ${response.status}`;
    //   throw new Error(message);
    // }

    // console.log('Response:', response);
    // const data = await response.json();
    // res.locals.uid = dashBoardHelper(data.datasource.uid);
    // console.log('Data:', data);
    // console.log('Datasource created:', data);
    //   return next();
    // } catch (error) {
    //   console.log(error)
    //   return next({
    //     log: `${error}: error in the grafanaController.createDataSource`,
    //     status: 400,
    //     message: `${error}: error with the data source`
    //   })
    // }
  },

  createDashBoard: async (req: Request, res: Response, next: NextFunction) => {
    const { uid } = res.locals.uid;
  },

  grafanaFetch: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    const response = await fetch(
      // TODO: change to .env variable
      'https://influx-prod-13-prod-us-east-0.grafana.net/api/v1/push/influx/write',
      {
        method: 'post',
        headers: {
          // prettier-ignore
          Authorization: `Bearer ${process.env.GRAFANA_GCLOUD_HOSTED_METRICS_ID!}:${process.env.GRAFANA_HTTP_METRICS_PROMETHEUS_API_KEY!}`,
          'Content-Type': 'text/plain',
        },
        /***************************************************
         * body must be in Prometheus style format:
         * --> const body = 'test,bar_label=abc,source=grafana_cloud_docs metric=35.2';
         *
         * Name: Prometheus style name(required)
         * Label: Identifies a specific visualization of a metric
         * Source: The source of the metric, the instance job that is generating the metric
         * Metric: Metric to be pushed up, the specific value
         **************************************************/
        body: JSON.stringify(req.body),
      }
    );
    const data = response.status;
    res.locals.grafanaFetch = data;
    console.log(data);
    next();
  },
};

export default grafanaController;
