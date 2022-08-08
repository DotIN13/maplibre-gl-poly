import {execSync} from 'child_process';

execSync('patch-package')
execSync('npm run codegen && npm run generate-query-test-fixtures');
