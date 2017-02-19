/**
 * Created by MACHENIKE on 2017/2/19.
 */
import React from 'react';
import ReactDom from 'react-dom';
import router from './js/router/router.js'

import base from './css/base.scss'
import style from './css/style.scss'


ReactDom.render(
    router,
   document.querySelector('#app')
)