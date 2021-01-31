import path from 'path';
import moduleAlias from 'module-alias';

const paths =  {
    "@root": path.join(__dirname, '..'),
    "@configs": path.join(__dirname),
    "@controller": path.join(__dirname,'..',"controller"),
    "@db": path.join(__dirname, '..', 'db'),
    "@mid": path.join(__dirname, '..', "midllewares"),
    "@models": path.join(__dirname, '..', "model"),
    "@vars": path.join(__dirname, '..', "vars"),
    "@server": path.join(__dirname, '..', 'server')
    
};

moduleAlias.addAliases(paths);