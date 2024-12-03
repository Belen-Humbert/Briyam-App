import { fetchProfilePhotoAPI } from '@api/medico/fetchProfilePhotoAPI';
import { ProfilePhotoResponse } from '@api/medico/responses/ProfilePhotoResponse';

describe('fetchProfilePhotoAPI', () => {
  const mockToken = 'testBearerToken';
  const mockResponse: ProfilePhotoResponse = {
    error: false,
    message: 'Foto obtenida correctamente',
    data: {
      foto: 'https://www.briyamcoworkingmedico.com/app-dev/bb52a136ef5b/id-20221008-080912-63417678937cf.jpg',
    },
  };

  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse),
      } as Response)
    );
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should fetch the profile photo successfully', async () => {
    const response = await fetchProfilePhotoAPI(mockToken);

    expect(response).toEqual(mockResponse);
    expect(fetch).toHaveBeenCalledWith(
      `${process.env.API_BASE_URL}/medico/foto-perfil`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${mockToken}`,
        },
      }
    );
  });

  it('should throw an error if the fetch fails', async () => {
    (fetch as jest.MockedFunction<typeof fetch>).mockRejectedValue(new Error('Network Error'));
  
    // Valida que la función lanza el mensaje de error esperado
    await expect(fetchProfilePhotoAPI(mockToken)).rejects.toThrow('Network Error');
  });  
});
