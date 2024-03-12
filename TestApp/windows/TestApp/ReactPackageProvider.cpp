#include "pch.h"
#include "ReactPackageProvider.h"
#include "NativeModules.h"

using namespace winrt::Microsoft::ReactNative;

namespace winrt::TestApp::implementation
{

void ReactPackageProvider::CreatePackage(IReactPackageBuilder const &packageBuilder) noexcept
{
    AddAttributedModules(packageBuilder, true);
}

} // namespace winrt::TestApp::implementation
