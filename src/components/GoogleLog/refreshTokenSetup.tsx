export const refreshTokenSetup = (res) => {
    const refreshTiming = (res.tokenObj.expries_in || 3600 - 5 * 60) * 1000;

    const refreshToken = async () => {
        const newAuthRes = await res.reloadAuthResponce();
        console.log('newAuthRes:', newAuthRes);

        console.log('new auth token', newAuthRes.id_token);
        setTimeout(refreshToken, refreshTiming);
    };

    setTimeout(refreshToken,refreshTiming);
}