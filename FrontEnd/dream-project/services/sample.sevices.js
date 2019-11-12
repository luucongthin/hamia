import ApiService from '../services/api.services'

const SampleService = {
    /**
     * demo api request
    **/
    getSampleData: async function (title, name, code) {
        const requestData = {
            method: 'get',
            url: "/categories",
            data: {
                title: title,
                name: name,
                code: code
            }
        }

        try {
            const response = await ApiService.customRequest(requestData)
            return response;
        } catch (error) {
            console.log('error', error);
        }
    }
}

export default SampleService;