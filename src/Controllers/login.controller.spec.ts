import { Test, TestingModule } from '@nestjs/testing';
import { LoginService } from '../Services/LoginService';
import LoginRequest from '../Models/Request/LoginRequest';
import { LoginController } from './LoginController';

describe('LoginController', () => {
    let loginController: LoginController;
    let loginService: LoginService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [LoginController],
            providers: [
                {
                    provide: LoginService,
                    useValue: {
                        login: jest.fn().mockResolvedValue({ result: 'mocked-token' }),
                    },
                },
            ],
        }).compile();

        loginController = module.get<LoginController>(LoginController);
        loginService = module.get<LoginService>(LoginService);
    });

    it('debería estar definido', () => {
        expect(loginController).toBeDefined();
    });

    it('debería llamar al loginService.login() y devolver la respuesta esperada', async () => {
        const body: LoginRequest = { email: 'test', password: 'password' };
        const response = await loginController.login(body);

        expect(loginService.login).toHaveBeenCalledWith(body);
        expect(response).toEqual({ result: 'mocked-token' });
    });
});
