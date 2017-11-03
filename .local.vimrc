let g:quickrun_config['javascript'] = {}
let g:quickrun_config['javascript']['command'] = 'make'
let g:quickrun_config['javascript']['cmdopt'] = 'run'
let g:quickrun_config['javascript']['exec'] = '%c %o SRC=@%'

let g:quickrun_config['javascript.unit'] = {}
let g:quickrun_config['javascript.unit']['command'] = 'make'
let g:quickrun_config['javascript.unit']['cmdopt'] = 'run-test'
let g:quickrun_config['javascript.unit']['exec'] = '%c %o SRC=@%'
