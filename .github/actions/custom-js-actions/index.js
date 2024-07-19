import core from '@actions/core';
import exec from '@actions/exec';
import github from '@actions/github';

const run = () => {
  const distFolder = core.getInput('dist-folder', { required: true });
  //exec.exec(`gh-pages -d ${distFolder}`);
  core.notice(`gh-pages -d ${distFolder}`);
  exec.exec(`npm run deploy`);
  //core.notice('Hello! from custom github action');
};

run();
