type TPasswordCategory = {
  id: number;
  label: string;
  color: string;
}

export type TPassword = {
  title: string;
  category: TPasswordCategory | null;
  category_name: string;
  login: string;
  password: string;
}

export const passwordCategories: TPasswordCategory[] = [
    {
        id: 1,
        label: 'Trabalho',
        color: '#7ea0e5'
    },
    {
        id: 2,
        label: 'Pessoal',
        color: '#7cdda6'
    },
    {
        id: 3,
        label: 'Rede Social',
        color: '#e7b17f'
    }
]

export const passwordList: TPassword[] = [
    {
      title: "Email Google",
      category:{
        id: 1,
        label: 'Trabalho',
        color: '#7ea0e5'
      },
      category_name: 'Trabalho',
      login: 'mateusvnlima@gmail.com',
      password: '123456789'
    },
    {
      title: "Facebook",
      category:     {
        id: 2,
        label: 'Pessoal',
        color: '#7cdda6'
      },
      category_name: 'Pessoal',
      login: 'mateusvnlima@gmail.com',
      password: '123456789'
    },
    {
      title: "Instagram",
      category:     {
        id: 3,
        label: 'Rede Social',
        color: '#e7b17f'
    },
      category_name: 'Rede Social',
      login: 'mtvozzy',
      password: '123456789'
    },
    {
      title: "Github",
      category:     {
        id: 1,
        label: 'Trabalho',
        color: '#7ea0e5'
    },
      category_name: 'Trabalho',
      login: 'anti-duhring',
      password: '123456789'
    },
    {
      title: "Twitter",
      category:     {
        id: 3,
        label: 'Rede Social',
        color: '#e7b17f'
    },
      category_name: 'Rede Social',
      login: 'antiduhring_',
      password: '123456789'
    },
    {
      title: "TikTok",
      category:     {
        id: 2,
        label: 'Pessoal',
        color: '#7cdda6'
    },
      category_name: 'Pessoal',
      login: 'mtvozzy',
      password: '123456789'
    },
    {
      title: "Email Google",
      category:     {
        id: 1,
        label: 'Trabalho',
        color: '#7ea0e5'
    },
      category_name: 'Trabalho',
      login: 'mateusvnlima@gmail.com',
      password: '123456789'
    },
    {
      title: "Facebook",
      category:     {
        id: 2,
        label: 'Pessoal',
        color: '#7cdda6'
    },
      category_name: 'Pessoal',
      login: 'mateusvnlima@gmail.com',
      password: '123456789'
    },
    {
      title: "Instagram",
      category:     {
        id: 3,
        label: 'Rede Social',
        color: '#e7b17f'
    },
      category_name: 'Rede Social',
      login: 'mtvozzy',
      password: '123456789'
    },
    {
      title: "Github",
      category:     {
        id: 1,
        label: 'Trabalho',
        color: '#7ea0e5'
    },
      category_name: 'Trabalho',
      login: 'anti-duhring',
      password: '123456789'
    },
];

