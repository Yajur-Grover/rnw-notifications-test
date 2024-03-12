#pragma once
#include "MainPage.g.h"
#include <winrt/Microsoft.ReactNative.h>

namespace winrt::TestApp::implementation
{
    struct MainPage : MainPageT<MainPage>
    {
        MainPage();
    };
}

namespace winrt::TestApp::factory_implementation
{
    struct MainPage : MainPageT<MainPage, implementation::MainPage>
    {
    };
}

