import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { blogs } from './utils/blogs';



i18n
    .use(initReactI18next)
    .init({
        lng: localStorage.getItem('language') || 'es',
        fallbackLng: 'es',
        interpolation:{
            escapeValue: false
        },
        resources: {
            en: {
                translation: {
                    navBarHome: 'Home',
                    navBarProducts: 'Products',
                    navBarContact: 'Contact', 
                    navBarTrial: 'Free trial', 

                    title: 'BDR Suite: Backup and data recovery solution.',
                    tileButton: 'Try for free',
                    titleList1:'Backup and recovery for your diverse IT workloads.', 
                    titleList2:'Enhanced security with ransomware protection', 
                    titleList3:'Flexible licensing and transparent pricing model', 

                    secondTitle: 'Why choose BDR?',
                    secondTitleList1: 'Rapid disaster recovery.',
                    secondTitleList2: 'Support for Windows, Linux and Mac.',
                    secondTitleList3: 'We offer backups for servers and workstations.',
                    secondTitleList4: 'Highly secure and scalable solution.',
                    secondTitleList5: 'Pay only for what you use.',
                    secondTitleKeword1: 'reliable copy',
                    secondTitleKeword2: '100% safe',

                    statisticsTitle: 'BDR VEMBU statistics in the world',
                    statisticsInfo: 'BDR-Vembu has more than 20 years of experience in the market, providing efficient solutions to more than 60,000 companies in more than 100 countries.',   
                    statisticsInfoNumber1: 'Client companies around the world',
                    statisticsInfoNumber2: 'Years of experience',
                    statisticsInfoNumber3: 'Countries with presence',

                    productsTitle: 'Products: Choose the one that best suits your business needs',
                    productsTitleButton: 'see more',
                    productsTitleCard1: 'Backup software for files',
                    productsInfoCard1: 'Backup files and folders on Servers & Workstations/Endpoints for Windows, Linux, Mac and NAS',
                    productsTitleCard2: 'Backup software for Windows OS',
                    productsInfoCard2: 'Disk Image Backup for Microsoft Windows',
                    productsTitleCard3: 'Backup software for SaaS',
                    productsInfoCard3: 'Microsoft 365 Backup | Google Workspace',
                    productsTitleCard4: 'Backup software for virtual machines',
                    productsInfoCard4: 'Backup for VMware | Hyper-V | Proxmox | KVM | oVirt',
                    productsTitleCard5: 'Database Backup Software',
                    productsInfoCard5: 'Backup for MS SQL | MySQL | PostgreSQL Data',
                    productsTitleCard6: 'Server Backup Software',
                    productsInfoCard6: 'Backup and recovery of servers with Exchange Server and SharePoint Server',
                
                    blogTitle1: 'Discover', 
                    blogTitle2: 'our Blog',
                    
                    formTitle: 'Do you want to receive personalized advice?',
                    formSelectTitle: "I'm looking for",
                    formNameHolder: 'Complete name',
                    formPhoneHolder: 'Phone',
                    formEmailHolder: 'E-mail',
                    formCheckButton: 'Subscribe to our Newsletter',
                    formButtonTitle: 'Send',

                    locationTilte: 'Where are we located?',
                    locationAddress: 'Carrera 63 No.100- 57',
                    locationCountry: 'Bogotá- Colombia',
                    
                    instagramAccount: '@backupdata',
                    instagramLink: 'Ver Instagram',

                    footerEmail: 'comercial@compumarketing.net',
                    footerWhatssApp: '+57 3104653633',
                    footerPhone: '310 4653633',
                    footerPolicy: 'Personal data protection policy',
                    
                    blogTitle: 'Discover our blog',
                    blogRead: 'reed more',

                    productPopupTitle1: 'File Backup Software',
                    productPopupList11: 'File and folder backup for Windows, Linux, and Mac',
                    productPopupList12: 'Automated backup with flexible scheduling options',
                    productPopupList13: 'Retain backup data for as long as you need and meet compliance requirements',
                    productPopupList14: 'Restore files/folders to original or alternate location',
                    productPopupList15: 'Back up only the changed blocks during incremental backup',
                    productPopupList16: 'End-to-end encryption of backup data using 256-bit AES encryption algorithm',

                    productPopupTitle2: 'Backup software for Windows OS',
                    productPopupList21: 'Disk image backup for Windows servers and workstations',
                    productPopupList22: 'Back up entire disk or individual partitions',
                    productPopupList23: 'Application-based backup for Microsoft and Oracle applications',
                    productPopupList24: 'End-to-end encryption of backup data using 256-bit AES encryption algorithm',
                    productPopupList25: 'Automatic backup verification',
                    productPopupList26: 'Supports bare metal recovery, instant boot of virtual machines, and file recovery',

                    productPopupTitle3: 'Backup software for SaaS',
                    productPopupList31: 'Microsoft 365 backup and recovery for Exchange Online, SharePoint Online, OneDrive, and Teams data',
                    productPopupList32: 'Google Workspace backup and recovery for Gmail, Google Contacts, Google Calendar, Google Drive, and shared Drive data',
                    productPopupList33: 'Store backups locally or in the cloud (BDRCloud, S3, Azure Blob, Google Cloud, Wasabi, etc.)',
                    productPopupList34: 'Flexible scheduling policies',
                    productPopupList35: 'Incremental backups to efficiently back up only changed blocks',
                    productPopupList36: 'Keep your data for any number of days with flexible retention',

                    productPopupTitle4: 'Backup software for virtual machines',
                    productPopupList41: 'Agentless backup and replication for VMware virtual machines',
                    productPopupList42: 'Agentless host/cluster level backup for Hyper-V virtual machines',
                    productPopupList43: 'Agentless backup for KVM virtual machines',
                    productPopupList44: 'Near-continuous data protection with 15-minute RPO',
                    productPopupList45: 'Application-based backup with log truncation',
                    productPopupList46: 'Instantly restore backed up virtual machines in less than 15 minutes',

                    productPopupTitle5: 'Database Backup Software',
                    productPopupList51: 'Agentless Image-Level Backup',
                    productPopupList52: 'Application-Level Backup',
                    productPopupList53: 'Application-Consistent Backup with Log Truncation',
                    productPopupList54: 'Restore MS SQL | MySQL | PostgreSQL in less than 15 minutes',
                    productPopupList55: 'Flexible Scheduling and Retention Policies',
                    productPopupList56: 'Granularly Restore Database or Table',

                    productPopupTitle6: 'Server Backup Software',
                    productPopupList61: 'Agentless Image-Level Backup',
                    productPopupList62: 'Backup and Recovery of Servers with Exchange Server and SharePoint Server',
                    productPopupList63: 'Application-Level Backup',
                    productPopupList64: 'Granularly Restore Specific Folders or Items in the Mailbox',
                    productPopupList65: 'Restore Data to the Same or Different Exchange Server',
                    productPopupList66: 'Automatic Backup Verification',
                }
            },
            es: {
                translation: {
                    blogs: blogs,

                    navBarHome: 'Inicio',
                    navBarProducts: 'Productos',
                    navBarContact: 'Contacto', 
                    navBarTrial: 'Prueba gratis', 

                    title: 'BDR Suite: Solución de respaldo y recuperación de información.',
                    tileButton: 'Prueba gratis',
                    titleList1:'Copia de seguridad y recuperación fiables y sin errores para sus diversas cargas de trabajo de TI.', 
                    titleList2:'Seguridad mejorada con protección contra ransomware', 
                    titleList3:'Licencias flexibles y modelo de precios transparente', 

                    secondTitle: '¿Por qué elegir BDR?',
                    secondTitleList1: 'Rápida recuperación en caso de desastres.',
                    secondTitleList2: 'Compatibilidad con Windows, Linux y Mac.',
                    secondTitleList3: 'Ofrecemos copias de respaldo para servidores y estaciones de trabajo.',
                    secondTitleList4: 'Solución altamente segura y escalable.',
                    secondTitleList5: 'Paga solo por lo que usas.',
                    secondTitleKeword1: 'Copia fiable',
                    secondTitleKeword2: '100% seguro',

                    statisticsTitle: 'Estadísticas de BDR VEMBU en el mundo',
                    statisticsInfo: 'BDR-Vembu, cuenta con una experiencia de más de 20 años en el mercado, prestando soluciones eficientes a más de 60 mil empresas en más de 100 países.',
                    statisticsInfoNumber1: 'Empresas clientes en el mundo',
                    statisticsInfoNumber2: 'Años de experiencia',
                    statisticsInfoNumber3: 'Paises con presencia',

                    productsTitle: 'Productos: Elige el que más se ajuste a tu necesidad empresarial',
                    productsTitleButton: 'Ver más',
                    productsTitleCard1: 'Software de respaldo de archivos',
                    productsInfoCard1: 'Copia de seguridad de archivos y carpetas en Servers & Workstations/Endpoints para Windows, Linux, Mac y NAS',
                    productsTitleCard2: 'Software de respaldo para SO Windows',
                    productsInfoCard2: 'Copia de seguridad de imagen de disco para Microsoft Windows',
                    productsTitleCard3: 'Software de respaldo para SaaS',
                    productsInfoCard3: 'Copia de seguridad de Microsoft 365 | Espacio de trabajo de Google',
                    productsTitleCard4: 'Software de respaldo para máquinas virtuales',
                    productsInfoCard4: 'Copia de seguridad VMware | Hyper-V | Proxmox | KVM | oVirt',
                    productsTitleCard5: 'Software de respaldo para Bases de Datos',
                    productsInfoCard5: 'Copia de seguridad para Datos MS SQL | MySQL | PostgreSQL',
                    productsTitleCard6: 'Software de respaldo de Servidores',
                    productsInfoCard6: 'Copia de seguridad y recuperación de servidores con Exchange Server y SharePoint Server',
                
                    blogTitle1: 'Descubre', 
                    blogTitle2: 'nuestro Blog',

                    formTitle: '¿Quieres recibir una asesoría personalizada?',
                    formSelectTitle: 'Estoy en busca de',
                    formNameHolder: 'Nombre Completo',
                    formPhoneHolder: 'Teléfono',
                    formEmailHolder: 'Correo Electrónico',
                    formCheckButton: 'Suscríbete a nuestro Newsletter',
                    formButtonTitle: 'Enviar',

                    locationTilte: '¿Dónde estamos ubicados?',
                    locationAddress: 'Carrera 63 No.100- 57',
                    locationCountry: 'Bogotá- Colombia',

                    instagramAccount: '@backupdata',
                    instagramLink: 'Ver Instagram',

                    footerEmail: 'comercial@compumarketing.net',
                    footerWhatssApp: '+57 3104653633',
                    footerPhone: '310 4653633',
                    footerPolicy: 'Politica de protección de datos personales',

                    blogTitle: 'Descubre nuestro blog',
                    blogRead: 'leer más',

                    productPopupTitle1: 'Software de respaldo de archivos',
                    productPopupList11: 'Copia de seguridad de archivos y carpetas para Windows, Linux y Mac',
                    productPopupList12: 'Copia de seguridad automatizada con opciones de programación flexibles',
                    productPopupList13: 'Conserve los datos de respaldo durante el tiempo que necesite y cumpla con los requisitos de cumplimiento',
                    productPopupList14: 'Restaurar archivos/carpetas a la ubicación original o ubicación alternativa',
                    productPopupList15: 'Realiza copias de seguridad únicamente de los bloques modificados durante la copia de seguridad incremental',
                    productPopupList16: 'Cifrado de extremo a extremo de los datos de respaldo mediante el algoritmo de cifrado AES de 256 bits',

                    productPopupTitle2: 'Software de respaldo para SO Windows',
                    productPopupList21: 'Copia de seguridad de imágenes de disco para servidores y estaciones de trabajo de Windows',
                    productPopupList22: 'Realiza una copia de seguridad del disco completo o de particiones individuales',
                    productPopupList23: 'Copia de seguridad basada en aplicaciones para aplicaciones de Microsoft y Oracle',
                    productPopupList24: 'Cifrado de extremo a extremo de los datos de respaldo mediante el algoritmo de cifrado AES de 256 bits',
                    productPopupList25: 'Verificación automática de copias de seguridad',
                    productPopupList26: 'Admite recuperación desde cero, arranque instantáneo de máquinas virtuales y recuperación de archivos',

                    productPopupTitle3: 'Software de respaldo para SaaS',
                    productPopupList31: 'Copia de seguridad y recuperación de Microsoft 365 para datos de Exchange Online, SharePoint Online, OneDrive y Teams',
                    productPopupList32: 'Copia de seguridad y recuperación de Google Workspace para Gmail, contactos de Google, calendario de Google, Google Drive y datos de Drive compartidos',
                    productPopupList33: 'Almacene copias de seguridad localmente o en la nube (BDRCloud, S3, Azure Blob, Google Cloud, Wasabi, etc.)',
                    productPopupList34: 'Políticas de programación flexible',
                    productPopupList35: 'Copias de seguridad incrementales para realizar copias de seguridad eficientes solo de los bloques modificados',
                    productPopupList36: 'Conserve sus datos durante cualquier cantidad de días con retención flexible',

                    productPopupTitle4: 'Software de respaldo para máquinas virtuales',
                    productPopupList41: 'Copia de seguridad y replicación sin agentes para máquinas virtuales VMware',
                    productPopupList42: 'Copia de seguridad a nivel de clúster/host sin agente para máquinas virtuales Hyper-V',
                    productPopupList43: 'Copia de seguridad sin agente para máquinas virtuales KVM',
                    productPopupList44: 'Protección de datos casi continua con RPO de 15 minutos',
                    productPopupList45: 'Copia de seguridad basada en aplicaciones con truncamiento de registros',
                    productPopupList46: 'Restaure instantáneamente las máquinas virtuales respaldadas en menos de 15 minutos',

                    productPopupTitle5: 'Software de respaldo para Bases de Datos',
                    productPopupList51: 'Copia de seguridad a nivel de imagen sin agente',
                    productPopupList52: 'Copia de seguridad a nivel de aplicación',
                    productPopupList53: 'Copia de seguridad consistente con la aplicación con truncamiento de registros',
                    productPopupList54: 'Restaurar MS SQL | MySQL | PostgreSQL en menos de 15 minutos',
                    productPopupList55: 'Políticas de retención y programación flexible',
                    productPopupList56: 'Restaurar granularmente la base de datos o tabla',

                    productPopupTitle6: 'Software de respaldo de Servidores',
                    productPopupList61: 'Copia de seguridad a nivel de imagen sin agente',
                    productPopupList62: 'Copia de seguridad y recuperación de servidores con Exchange Server y SharePoint Server',
                    productPopupList63: 'Copia de seguridad a nivel de aplicación',
                    productPopupList64: 'Restaurar de forma granular carpetas o elementos específicos en el buzón',
                    productPopupList65: 'Restaurar datos en el mismo servidor Exchange o en uno diferente',
                    productPopupList66: 'Verificación automática de copias de seguridad',

                }
            },
        }
    });

export default i18n;