import * as chalk from 'chalk';
import * as webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';

process.env.NODE_ENV = 'production';

// tslint:disable-next-line:no-console
console.log(chalk.blue('Generating minified bundle for production. This will take a moment...'));

webpack(webpackConfig).run((err: any, stats: any) => {
    if (err) { // so a fatal error occured. Stop here.
        // tslint:disable-next-line:no-console
        console.log(chalk.red(err));
        return 1;
    }

    const jsonStats = stats.toJson();

    if (jsonStats.hasErrors) {
        // tslint:disable-next-line:no-console
        return jsonStats.errors.map((error: any) => console.log(chalk.red(error)));
    }

    if (jsonStats.hasWarnings) {
        // tslint:disable-next-line:no-console
        console.log(chalk.yellow('Webpack generated the following warnings: '));
        // tslint:disable-next-line:no-console
        jsonStats.warnings.map((warning: any) => console.log(chalk.yellow(warning)));
    }

    // tslint:disable-next-line:no-console
    console.log(`Webpack stats: ${stats}`);

    // if we got this far, the build succeeded.
    // tslint:disable-next-line:no-console
    console.log(chalk.green('Your app has been built for production and written to /dist!'));
    return 0;
});
