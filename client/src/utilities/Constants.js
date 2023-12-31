const API_BASE_URL_DEVELOPEMENT = 'https://localhost:7007';
const API_BASE_URL_PRODUCTION = 'https://appname.azurewebsites.net';

const ENDPOINTS = {
    GET_ALL_STUDENTS: 'api/Users',
    GET_STUDENT_BY_ID: 'api/Users',
    CREATE_STUDENT: 'api/Users',
    UPDATE_STUDENT: 'api/Users',
    DELETE_STUDENT_BY_ID: 'api/Users',

    GET_ALL_JOBS: 'api/jobs',
    GET_JOB_BY_ID: 'api/jobs',
    CREATE_JOB: 'api/jobs',
    UPDATE_JOB: 'api/jobs',
    DELETE_JOB_BY_ID: 'api/jobs',

    GET_ALL_PROJETS: 'api/projets',
    GET_PROJET_BY_ID: 'api/projets',
    CREATE_PROJET: 'api/projets',
    UPDATE_PROJET: 'api/projets',
    DELETE_PROJET_BY_ID: 'api/projets',

    GET_ALL_ROLES: 'api/roles',
    GET_ROLE_BY_ID: 'api/roles',
    CREATE_ROLE: 'api/roles',
    UPDATE_ROLE: 'api/roles',
    DELETE_ROLE_BY_ID: 'api/roles',

    GET_ALL_COMPETENCES: 'api/Competence',
    GET_COMPETENCE_BY_ID: 'api/Competence',
    CREATE_COMPETENCE: 'api/Competence',
    UPDATE_COMPETENCE: 'api/Competence',
    DELETE_COMPETENCE_BY_ID: 'api/Competence',

    GET_ALL_DOMAINES: 'api/Domaines',
    GET_DOMAINE_BY_ID: 'api/Domaines',
    CREATE_DOMAINE: 'api/Domaines',
    UPDATE_DOMAINE: 'api/Domaines',
    DELETE_DOMAINE_BY_ID: 'api/Domaines',

    GET_ALL_MODULES: 'api/Modules',
    GET_MODULE_BY_ID: 'api/Modules',
    CREATE_MODULE: 'api/Modules',
    UPDATE_MODULE: 'api/Modules',
    DELETE_MODULE_BY_ID: 'api/Modules',


    LOGIN: 'api/login',
    LOGOUT: 'api/logout',
    CONNECTE : 'api/user',
    TEST : 'api/test-cookie'
};

const development = {
    API_URL_GET_ALL_STUDENTS: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.GET_ALL_STUDENTS}`,
    API_URL_GET_STUDENT_BY_ID: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.GET_STUDENT_BY_ID}`,
    API_URL_CREATE_STUDENT: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.CREATE_STUDENT}`,
    API_URL_UPDATE_STUDENT: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.UPDATE_STUDENT}`,
    API_URL_DELETE_STUDENT_BY_ID: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.DELETE_STUDENT_BY_ID}`,

    API_URL_GET_ALL_JOBS: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.GET_ALL_JOBS}`,
    API_URL_GET_JOB_BY_ID: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.GET_JOB_BY_ID}`,
    API_URL_CREATE_JOB: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.CREATE_JOB}`,
    API_URL_UPDATE_JOB: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.UPDATE_JOB}`,
    API_URL_DELETE_JOB_BY_ID: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.DELETE_JOB_BY_ID}` ,

    API_URL_GET_ALL_PROJETS: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.GET_ALL_PROJETS}`,
    API_URL_GET_PROJET_BY_ID: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.GET_PROJET_BY_ID}`,
    API_URL_CREATE_PROJET: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.CREATE_PROJET}`,
    API_URL_UPDATE_PROJET: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.UPDATE_PROJET}`,
    API_URL_DELETE_PROJET_BY_ID: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.DELETE_PROJET_BY_ID}`,

    API_URL_GET_ALL_ROLES: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.GET_ALL_ROLES}`,
    API_URL_GET_ROLE_BY_ID: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.GET_ROLE_BY_ID}`,
    API_URL_CREATE_ROLE: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.CREATE_ROLE}`,
    API_URL_UPDATE_ROLE: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.UPDATE_ROLE}`,
    API_URL_DELETE_ROLES_BY_ID: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.DELETE_ROLE_BY_ID}`,

    API_URL_GET_ALL_COMPETENCES: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.GET_ALL_COMPETENCES}`,
    API_URL_GET_COMPETENCE_BY_ID: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.GET_COMPETENCE_BY_ID}`,
    API_URL_CREATE_COMPETENCE: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.CREATE_COMPETENCE}`,
    API_URL_UPDATE_COMPETENCE: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.UPDATE_COMPETENCE}`,
    API_URL_DELETE_COMPETENCE_BY_ID: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.DELETE_COMPETENCE_BY_ID}`,

    API_URL_GET_ALL_DOMAINES: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.GET_ALL_DOMAINES}`,
    API_URL_GET_DOMAINE_BY_ID: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.GET_DOMAINE_BY_ID}`,
    API_URL_UPDATE_DOMAINE: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.UPDATE_DOMAINE}`,
    API_URL_CREATE_DOMAINE: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.CREATE_DOMAINE}`,
    API_URL_DELETE_DOMAINE_BY_ID: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.DELETE_DOMAINE_BY_ID}`,

    API_URL_GET_ALL_MODULES: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.GET_ALL_MODULES}`,
    API_URL_GET_MODULE_BY_ID: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.GET_MODULE_BY_ID}`,
    API_URL_UPDATE_MODULE: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.UPDATE_MODULE}`,
    API_URL_CREATE_MODULE: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.CREATE_MODULE}`,
    API_URL_DELETE_MODULE_BY_ID: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.DELETE_MODULE_BY_ID}`,

    LOGIN: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.LOGIN}`,
    LOGOUT: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.LOGOUT}`,
    CONNECTE: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.CONNECTE}`,
    TEST: `${API_BASE_URL_DEVELOPEMENT}/${ENDPOINTS.TEST}`,
};

const production = {
    API_URL_GET_ALL_STUDENTS: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.GET_ALL_STUDENTS}`,
    API_URL_GET_STUDENT_BY_ID: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.GET_STUDENT_BY_ID}`,
    API_URL_CREATE_STUDENT: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.CREATE_STUDENT}`,
    API_URL_UPDATE_STUDENT: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.UPDATE_STUDENT}`,
    API_URL_DELETE_STUDENT_BY_ID: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.DELETE_STUDENT_BY_ID}`,

    API_URL_GET_ALL_JOBS: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.GET_ALL_JOBS}`,
    API_URL_GET_JOB_BY_ID: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.GET_JOB_BY_ID}`,
    API_URL_CREATE_JOB: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.CREATE_JOB}`,
    API_URL_UPDATE_JOB: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.UPDATE_JOB}`,
    API_URL_DELETE_JOB_BY_ID: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.DELETE_JOB_BY_ID}`,


    API_URL_GET_ALL_PROJETS: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.GET_ALL_PROJETS}`,
    API_URL_GET_PROJET_BY_ID: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.GET_PROJET_BY_ID}`,
    API_URL_CREATE_PROJET: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.CREATE_PROJET}`,
    API_URL_UPDATE_PROJET: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.UPDATE_PROJET}`,
    API_URL_DELETE_PROJET_BY_ID: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.DELETE_PROJET_BY_ID}`,

    API_URL_GET_ALL_ROLES: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.GET_ALL_ROLES}`,
    API_URL_GET_ROLE_BY_ID: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.GET_ROLE_BY_ID}`,
    API_URL_CREATE_ROLE: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.CREATE_ROLE}`,
    API_URL_UPDATE_ROLE: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.UPDATE_ROLE}`,
    API_URL_DELETE_ROLES_BY_ID: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.DELETE_ROLE_BY_ID}`,

    API_URL_GET_ALL_COMPETENCES: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.GET_ALL_COMPETENCES}`,
    API_URL_GET_COMPETENCE_BY_ID: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.GET_COMPETENCE_BY_ID}`,
    API_URL_CREATE_COMPETENCE: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.CREATE_COMPETENCE}`,
    API_URL_UPDATE_COMPETENCE: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.UPDATE_COMPETENCE}`,
    API_URL_DELETE_COMPETENCE_BY_ID: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.DELETE_COMPETENCE_BY_ID}`,

    API_URL_GET_ALL_DOMAINES: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.GET_ALL_DOMAINES}`,
    API_URL_GET_DOMAINE_BY_ID: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.GET_DOMAINE_BY_ID}`,
    API_URL_CREATE_DOMAINE: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.CREATE_DOMAINE}`,
    API_URL_UPDATE_DOMAINE: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.UPDATE_DOMAINE}`,
    API_URL_DELETE_DOMAINE_BY_ID: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.DELETE_DOMAINE_BY_ID}`,

    API_URL_GET_ALL_MODULES: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.GET_ALL_MODULES}`,
    API_URL_GET_MODULE_BY_ID: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.GET_MODULE_BY_ID}`,
    API_URL_CREATE_MODULE: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.CREATE_MODULE}`,
    API_URL_UPDATE_MODULE: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.UPDATE_MODULE}`,
    API_URL_DELETE_MODULE_BY_ID: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.DELETE_MODULE_BY_ID}`,

    LOGIN: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.LOGIN}`,
    LOGOUT: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.LOGOUT}`,
    CONNECTE: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.CONNECTE}`,
    TEST: `${API_BASE_URL_PRODUCTION}/${ENDPOINTS.TEST}`,


};

const Constants = process.env.NODE_ENV === 'development' ? development : production;

export  default Constants;