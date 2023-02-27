import AsyncStorage from "@react-native-async-storage/async-storage";

const usePersistUserData = () => {

    const set = (name: string, object: any) => {
        return new Promise(async(resolve, reject) => 
            await AsyncStorage.setItem(name, JSON.stringify(object))
                .then(() => resolve({ success: true }))
                .catch(err => reject(err))
        )
        
    }

    const setAll = (dataArray: { name: string, object: unknown }[]) => {
        const dataArrayFiltered = dataArray.filter(v => v);
        const promisesArray = dataArrayFiltered.map(data => 
            {  

                return new Promise(async(resolve, reject) => 
                await AsyncStorage.setItem(data.name, JSON.stringify(data.object))
                    .then(() => resolve({ success: true }))
                    .catch(err => reject(err))
            )}
        )

        return Promise.all(promisesArray)
    }

    const get = (dataName: string) => {
        return new Promise(async(resolve, reject) => 
            await AsyncStorage.getItem(dataName)
                .then(res => resolve(JSON.parse(res)))
                .catch(err => reject({ error: err }))
        )
    }

    const getAll = (dataArray: string[]) => {
        const dataArrayFiltered = dataArray.filter(v => v);
        const promises = dataArrayFiltered.map(name => 
            new Promise(async(resolve, reject) =>
                await AsyncStorage.getItem(name)
                    .then(res => {

                        resolve(JSON.parse(res))
                    })
                    .catch(err => reject(err))
            )    
        )

        return Promise.all(promises)
    }

    const removeAll = (dataArray: string[]) => {
        const dataArrayFiltered = dataArray.filter(v => v);
        const promises = dataArrayFiltered.map(name => 
            new Promise(async(resolve, reject) =>
                await AsyncStorage.removeItem(name)
                    .then(res => resolve({ success: true }))
                    .catch(err => reject(err))
            )    
        )

        return Promise.all(promises)
    }

    return { set, get, setAll, getAll, removeAll }
}

export default usePersistUserData;