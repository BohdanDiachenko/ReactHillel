import { Component } from 'react';
import FirstTask from './components/FirstTask';
import ThirdTask from './components/ThirdTask';
import SecondTask from './components/SecondTask';
import { Box, Typography, CssBaseline, AppBar, Toolbar, IconButton, Drawer, ListItem, ListItemButton, ListItemText, Divider, List } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { AppState, Task } from './models/models';

const drawerWidth = 340;

export default class ResponsiveDrawer extends Component<{}, AppState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            task: 'FirstTask',
            drawerOpen: false,
        }
    }

    handleDrawerToggle = () => {
        this.setState((prevState: AppState) => ({
            drawerOpen: !prevState.drawerOpen 
          }));
    };

    setSelectedTask = (selectedTask: string) => () => {
      this.setState({ task: selectedTask, drawerOpen: false });
    }

    render() {
        const { task } = this.state;

        const tasks: { [key: string]: Task } = {
            FirstTask: {
                title: 'Перше завдання',
                description: 'Додати кнопку, за натисканням на яку Stepan зміниться на Mykola, а 25 зміниться на 30.'
            },
            SecondTask: {
                title: 'Друге завдання',
                description: 'Переробіть попереднє завдання так, щоб за першим натисканням на кнопку абзац з нашим текстом показувався, а за другим натисканням – ховався.'
            },
            ThirdTask: {
                title: 'Трете завдання',
                description: 'Переробіть попереднє завдання так, щоб після заходу на сторінку текст кнопки був показати, а після натискання на неї приховати (ну і так далі - по кожному натисканню текст повинен чергуватись).'
            }
        };

        const tasksArray: JSX.Element[] = Object.keys(tasks).map((key) => (
            <ListItem key={key} onClick={this.setSelectedTask(key)}>
                <ListItemButton >
                    <ListItemText primary={tasks[key].title} />
                </ListItemButton>
            </ListItem>
        ));

        const drawer = (
            <div>
                <Divider />
                <List>
                    {tasksArray}
                </List>
            </div>
        );

        return (
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={this.handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            ДЗ 2. Props, State, JSX
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    <Drawer
                        variant="temporary"                       
                        open={this.state.drawerOpen}
                        onClose={this.handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true,
                        }}                        
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        <Box sx={{ p: 3, backgroundColor: '#F5F5F5', }}>
                            <Typography paragraph >
                                <b> Даний наступний стейт:</b> <br />
                                this.state = "{"name: 'Stepan', age: 25"}";
                            </Typography>
                            <Typography paragraph >
                                <b> Вигляд JSX</b> <br />
                                &lt;div&gt;<br />
                                <Box sx={{ pl: 3 }}>
                                    &lt;p&gt;Name: Stepan, age: 25&lt;/p&gt;
                                    &lt;button&gt;Click on me&lt;/button&gt;
                                </Box>
                                &lt;/div&gt;
                            </Typography>
                        </Box>
                        {drawer}
                    </Drawer>
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3,  width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />
                    <Box sx={{ mb: 5 }}>
                    <Typography paragraph>
                        <b>Завдання:</b> {tasks[task].description}
                    </Typography>
                    <Divider />
                </Box>
                    {task === 'FirstTask' && <FirstTask />}
                    {task === 'SecondTask' && <SecondTask />}
                    {task === 'ThirdTask' && <ThirdTask />}
                </Box>
            </Box>
        );
    }
}
